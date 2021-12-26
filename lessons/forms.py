from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from .models import *
from django.forms import ModelForm, inlineformset_factory
from .models import UserDataAdd

class AddPostForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['cat'].empty_label = "Категория не выбрана"

    class Meta:
        model = Lessons
        fields = ['title', 'slug', 'content', 'photo', 'is_published', 'cat']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input'}),
            'content': forms.Textarea(attrs={'cols': 60, 'rows': 10}),
        }

    def clean_title(self):
        title = self.cleaned_data['title']
        if len(title) > 200:
            raise ValidationError('Длина превышает 200 символов')

        return title


class RegisterUserForm(UserCreationForm):
    username = forms.CharField(label='Логин', widget=forms.TextInput(attrs={'class': 'form-input'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class': 'form-input'}))
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-input'}))
    password2 = forms.CharField(label='Повтор пароля', widget=forms.PasswordInput(attrs={'class': 'form-input'}))

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')


class LoginUserForm(AuthenticationForm):
    username = forms.CharField(label='Логин', widget=forms.TextInput(attrs={'class': 'form-input'}))
    password = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-input'}))

class ContactForm(ModelForm):
    class Meta:
        model = UserDataAdd
        fields =('name', 'phone_number', 'emeil', 'experience', 'sity')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'input input_name', 'placeholder': 'Имя '}),
            'phone_number': forms.TextInput(attrs={'class': 'input input_phone', 'placeholder': 'Телефон '}),
            'emeil': forms.TextInput(attrs={'class': 'input input_mail', 'placeholder': 'Ваша почта'}),
            'experience': forms.TextInput(attrs={'class': 'input input_expirience', 'placeholder': 'Ваш стаж(цифра)'}),
            'sity': forms.TextInput(attrs={'class': 'input input_sity', 'placeholder': 'Город'}),
        }

class forTeachers(ModelForm):
    class Meta:
        model = teacherExcel
        fields =('nameOfTeacher',  'nameOfStudent', 'emeilOfTeacher', 'cost', 'numOfLessons')
        widgets = {
            'nameOfTeacher': forms.TextInput(attrs={'placeholder': 'Ваше Имя'}),
            'nameOfStudent': forms.TextInput(attrs={'placeholder': 'Имя ученика'}),
            'emeilOfTeacher': forms.TextInput(attrs={'placeholder': 'Ваша почта'}),
            'cost': forms.TextInput(attrs={'placeholder': 'Стоимость занятия за 45 мин'}),
            'numOfLessons': forms.TextInput(attrs={'placeholder': 'Количество уроков'}),
        }


