from django.contrib.auth.models import User
from django.db import models
from django.utils.html import escape, mark_safe

from django.conf import settings
from django.db import models
from django.db.models import Q
from django.urls import reverse


class Lessons(models.Model):
    title = models.CharField(max_length=255, verbose_name="Заголовок")
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL")
    content = models.TextField(blank=True, verbose_name="Текст урока")
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/", verbose_name="Фото")
    time_create = models.DateTimeField(auto_now_add=True, verbose_name="Время создания")
    time_update = models.DateTimeField(auto_now=True, verbose_name="Время изменения")
    is_published = models.BooleanField(default=True, verbose_name="Публикация")
    cat = models.ForeignKey('Category', on_delete=models.PROTECT, verbose_name="Категории")


    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_slug': self.slug})

    class Meta:
        verbose_name = 'Темы'
        verbose_name_plural = 'Темы'
        ordering = ['id']


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True, verbose_name="Категория")
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('category', kwargs={'cat_slug': self.slug})

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['id']


class UserDataAdd(models.Model):
    name = models.CharField(max_length=255, verbose_name="Имя")
    phone_number = models.CharField(max_length=255,verbose_name="Номер телефона")
    emeil = models.EmailField(max_length=255, verbose_name="Эмеил")
    experience = models.CharField(max_length=255, verbose_name="Стаж(цифрой)")
    sity = models.CharField(max_length=255, verbose_name="город")

    class Meta:
        verbose_name = 'Темы'
        verbose_name_plural = 'Данные с формы'

    def __str__(self):
        return self.name





