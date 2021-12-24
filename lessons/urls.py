from django.urls import path, re_path

from .views import *

urlpatterns = [
    path('', LessonsHome.as_view(), name='home'),
    path('about/', about, name='about'),
    path('addpage/', AddPage.as_view(), name='add_page'),
    path('calculators/', calculators, name='calculators'),
    path('become_author/', become_author , name='become_author'),
    path('login/', LoginUser.as_view(), name='login'),
    path('logout/', logout_user, name='logout'),
    path('register/', RegisterUser.as_view(), name='register'),
    path('post/<slug:post_slug>/', ShowPost.as_view(), name='post'),
    path('category/<slug:cat_slug>/', LessonsCategory.as_view(), name='category'),
]
