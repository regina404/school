from django.contrib import admin

from .models import *

class LessonsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'time_create', 'photo', 'is_published')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'content')
    list_editable = ('is_published',)
    list_filter = ('is_published', 'time_create')
    prepopulated_fields = {"slug": ("title",)}


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('name',)
    prepopulated_fields = {"slug": ("name",)}

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'emeil', 'experience', 'sity')
    list_display_links = ('name', 'phone_number')
    search_fields = ('name',)


admin.site.register(Lessons, LessonsAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(UserDataAdd, ContactAdmin)

