from django.db.models import Count
from fractions import Fraction
from typing import List
from pint import UnitRegistry
from .models import *


menu = [{'title': "О школе", 'url_name': 'about'},
        {'title': "Добавить урок", 'url_name': 'add_page'},
        {'title': "Калькуляторы", 'url_name': 'calculators'},
        {'title': "Стать репетитором", 'url_name': 'become_tutor'},

]

class DataMixin:
    paginate_by = 2

    def get_user_context(self, **kwargs):
        context = kwargs
        cats = Category.objects.annotate(Count('lessons'))

        user_menu = menu.copy()
        if not self.request.user.has_perm('lessons.change_lessons'):
            user_menu.pop(1)

        context['menu'] = user_menu

        context['cats'] = cats
        if 'cat_selected' not in context:
            context['cat_selected'] = 0
        return context

