from django.contrib.auth import logout, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.core.paginator import Paginator
from django.http import HttpResponse, HttpResponseNotFound, Http404
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from .permissions import AuthorPermissionsMixin

from .forms import *
from .models import *
from .utils import *


class LessonsHome(DataMixin, ListView):
    model = Lessons
    template_name = 'lessons/index.html'
    context_object_name = 'posts'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Главная страница")
        return dict(list(context.items()) + list(c_def.items()))

    def get_queryset(self):
        return Lessons.objects.filter(is_published=True)


def about(request):
    contact_list = Lessons.objects.all()
    paginator = Paginator(contact_list, 3)

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'lessons/about.html', {'page_obj': page_obj, 'menu': menu, 'title': 'О школе'})


class AddPage(LoginRequiredMixin, PermissionRequiredMixin, DataMixin, CreateView):
    permission_required = "lessons.change_lessons"
    form_class = AddPostForm
    template_name = 'lessons/addpage.html'
    permission_denied_message = 'gfvhjfg'
    login_url = "/login/"
    redirect_field_name = "redirect"

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Добавление урока")
        return dict(list(context.items()) + list(c_def.items()))




def calculators(request):
    contact_list = Lessons.objects.all()
    paginator = Paginator(contact_list, 3)

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'lessons/calculators.html', {'page_obj': page_obj, 'menu': menu, 'title': 'Калькуляторы'})

def become_author(request):
    return HttpResponse("Стать репетитором")




def pageNotFound(request, exception):
    return HttpResponseNotFound('<h1>Страница не найдена</h1>')


class ShowPost(LoginRequiredMixin, DataMixin, DetailView):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
    model = Lessons
    template_name = 'lessons/post.html'
    slug_url_kwarg = 'post_slug'
    context_object_name = 'post'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title=context['post'])
        return dict(list(context.items()) + list(c_def.items()))


class LessonsCategory(DataMixin, ListView):
    model = Lessons
    template_name = 'lessons/index.html'
    context_object_name = 'posts'
    allow_empty = False

    def get_queryset(self):
        return Lessons.objects.filter(cat__slug=self.kwargs['cat_slug'], is_published=True)

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title='Категория - ' + str(context['posts'][0].cat),
                                      cat_selected=context['posts'][0].cat_id)
        return dict(list(context.items()) + list(c_def.items()))


class RegisterUser(DataMixin, CreateView):
    form_class = RegisterUserForm
    template_name = 'lessons/register.html'
    success_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Регистрация")
        return dict(list(context.items()) + list(c_def.items()))

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('home')


class LoginUser(DataMixin, LoginView):
    form_class = LoginUserForm
    template_name = 'lessons/login.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Авторизация")
        return dict(list(context.items()) + list(c_def.items()))

    def get_success_url(self):
        return reverse_lazy('home')


def logout_user(request):
    logout(request)
    return redirect('login')
