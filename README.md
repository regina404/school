# Онлайн школа математики 
Над проектом работают: 
+ [Regina.Sliusar](https://github.com/regina404) -студентка группы IB-93 123 специальность 
+ [Veronica.Shukhman](https://github.com/nikelyandjelo) - студентка группы IP-05 121 специальность 
 ---
## Цель нашего проекта 
* Разработать удобную онлайн платформу для обучения математики , с возможностью математических тренировок каждый день и с постоянной поддержкой от репетиторов,которые будут завлечены в это 

------------
# Структура проекта

- school  
  - school  (Главный файл с настройками сервера)
    -  init__.py
    -  product.js
    - __pycache__
    - asgi.py
    - settings.py
    - urls.py
    - wsgi.py

  - lessons    
    - __init__.py
    - _pycache__
    - admin.py
    - apps.py
    - forms.py
    - migrations
    - models.py
    - permissions.py
    - static 
       - lessons
         - css
         - js
         - images
    - templates (html)   
      - lessons
    - templatetags  
        - lessons_tags.py
    - tests.py      
    - urls.py
    - utils.py
    - views.py

   - media
     - photo   
  

  - db.sqlite3

  - node_modules
   - manage.py

------------
# Доступно
------------

# Планы
------------
# Описание работы проекта поэтапно 

* На сайте присутствует форма Регистрации, мы видим проверку паролей с помощью валидации формы. После регистрации пользователь автоматически входит в свой аккаунт.

![IMAGE 2021-12-24 10:31:50](https://user-images.githubusercontent.com/71755968/147334912-2a865a24-fb58-4521-8bca-f0524e3af42b.jpg)

* Все уроки распределены по группам, которые можно добавлять, каждая тема имеет свои уроки.Зарегистрированный пользователь имеет возможность просмотреть весь урок, нажав на кнопку "Читать пост"

![IMAGE 2021-12-24 10:33:27](https://user-images.githubusercontent.com/71755968/147335028-45caa592-6f39-4123-9160-f100b9c0db06.jpg)

* Открытие всего урока, при нажатии на кнопку "Читать пост"

![IMAGE 2021-12-24 10:33:41](https://user-images.githubusercontent.com/71755968/147335045-f6921f2e-4434-4ed5-a4a9-a850a4164257.jpg)

* Если незарегистрированный пользователь, нажмет на кнопку "Читать пост", то он автоматически перейдет на страницу Входа.

![IMAGE 2021-12-24 10:33:55](https://user-images.githubusercontent.com/71755968/147335060-7804f16f-d435-43fc-baad-810b5444affb.jpg)

* Если незарегистрированный пользователь, или пользователь, у которого меньше прав доступа, чем у группы "editor", то ему не будет доступна вкладка "Добавить урок"
 
![IMAGE 2021-12-24 10:34:41](https://user-images.githubusercontent.com/71755968/147335134-6ce13ec6-a1aa-4d54-b661-96e58402035f.jpg)
*
* Видна новая вкладка "Добавить урок"
![IMAGE 2021-12-24 10:34:52](https://user-images.githubusercontent.com/71755968/147335164-63fe4a8d-f425-478a-bc2b-f6ad10517b2c.jpg)

* При добавлении нового урока, нужно ввести: заголовок, URL, текст урока, фото, а так же нужно выбрать категорию темы.

![IMAGE 2021-12-24 10:35:06](https://user-images.githubusercontent.com/71755968/147335198-a1933b0b-7374-4d25-889b-07829237f573.jpg)

* Новый добавленный урок находится на сайте(с прошлого фото)

![IMAGE 2021-12-24 10:35:11](https://user-images.githubusercontent.com/71755968/147335205-146824c4-c982-4969-82a0-179146c1fc6c.jpg)

* Контент вкладки "О школе"

![IMAGE 2021-12-24 10:35:14](https://user-images.githubusercontent.com/71755968/147335216-b7e50c1b-7449-4037-81d7-3c2f9bdd77ac.jpg)

* Контент вкладки "О школе"
![IMAGE 2021-12-24 10:35:17](https://user-images.githubusercontent.com/71755968/147335223-5d16d05b-7593-4e5b-a096-e72ea8745e0e.jpg)

* Контент вкладки "О школе"

![IMAGE 2021-12-24 10:35:21](https://user-images.githubusercontent.com/71755968/147335230-3bf17f0d-8717-4144-928d-4f07914a916c.jpg)

* На странице "О школе", можно нажать на "Пройти тестирование"

![IMAGE 2021-12-24 10:35:25](https://user-images.githubusercontent.com/71755968/147335237-686b7c7c-be6a-49d6-9671-b6aa070e0ddc.jpg)

* Вопрос из теста

![IMAGE 2021-12-24 10:35:29](https://user-images.githubusercontent.com/71755968/147335242-c83fe368-f8eb-451a-aee2-eb97b407ab03.jpg)

* Результаты теста, выводятся после его прохождения

![IMAGE 2021-12-24 10:35:34](https://user-images.githubusercontent.com/71755968/147335253-fc680708-043e-43df-810f-b7f0e3174b53.jpg)

* Контент вкладки "Калькуляторы", был реализован калькулятор с разными функциями.

![IMAGE 2021-12-24 10:35:37](https://user-images.githubusercontent.com/71755968/147335261-0389f0e6-30a1-467f-9334-1568a0ed9a69.jpg)

