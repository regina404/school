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
       - quizes
         - css
         - js
         - images
    - templates (html)   
      - lessons
      - quizes
    - templatetags  
        - lessons_tags.py
    - tests.py      
    - urls.py
    - utils.py
    - views.py

   - media
     - photo 
       
   - quizes    
     - __init__.py
     - _pycache__
     - admin.py
     - apps.py
     - forms.py
     - migrations
     - models.py    
     - urls.py
     - utils.py
     - views.py

   - questions    
     - __init__.py
     - _pycache__
     - admin.py
     - apps.py
     - forms.py
     - migrations
     - models.py
     - permissions.py   
     - urls.py
     - utils.py
     - views.py

   - results    
     - __init__.py
     - _pycache__
     - admin.py
     - apps.py
     - forms.py
     - migrations
     - models.py  
     - urls.py
     - utils.py
     - views.py

  - db.sqlite3

  - node_modules
   - manage.py

------------
# Доступно
- Доступные темы:
  - Аксиомы стереометрии 
  - Алгебраические выражения
  - Тригонометрия
  - Так же , если пользователь занесен в группу "editor" есть возможность добавления новых тем
- Страница "О школе"
- Страничца с тестом
- Страница с калькулятором
- Регистрация/логин
- Добавление маркеров для зарегистрированных пользователей
- Страница с тестами
------------

# Планы
- Разработать несколько калькуляторов(матречный калькулятор,калькулятор пределов, калькулятор производной, первообразной и тд)
- Увеличить количество доступных тем и категорий
- Улучшить онлайн платформы с ежедневными тестами, заданиями и тренировками
- Разработать тесты с использованием анимаций и тд
------------
# Описание работы проекта поэтапно 

### На сайте присутствует форма Регистрации, мы видим проверку паролей с помощью валидации формы. После регистрации пользователь автоматически входит в свой аккаунт.
<img width="1438" alt="Снимок экрана 2021-12-29 в 13 07 04" src="https://user-images.githubusercontent.com/63124387/147656120-acdce555-ea6e-45c1-8809-c9d881d07a50.png">
<img width="1440" alt="Снимок экрана 2021-12-29 в 13 08 09" src="https://user-images.githubusercontent.com/63124387/147656187-aed1c5b6-b5c2-4377-b8ac-1c11baaf3985.png">


### Все уроки распределены по группам, которые можно добавлять, каждая тема имеет свои уроки.Зарегистрированный пользователь имеет возможность просмотреть весь урок, нажав на кнопку "Читать пост"
<img width="1433" alt="Снимок экрана 2021-12-29 в 13 08 49" src="https://user-images.githubusercontent.com/63124387/147656257-53301ced-b6c3-4cc2-b77d-e567241bae93.png">


### Открытие всего урока, при нажатии на кнопку "Читать пост"
<img width="1433" alt="Снимок экрана 2021-12-29 в 13 09 21" src="https://user-images.githubusercontent.com/63124387/147656287-dd7014fb-c7ba-442c-afb4-8bbaeb61c2bf.png">


### Если незарегистрированный пользователь, нажмет на кнопку "Читать пост", то он автоматически перейдет на страницу Входа.
<img width="1437" alt="Снимок экрана 2021-12-29 в 13 09 49" src="https://user-images.githubusercontent.com/63124387/147656336-a8ad3432-162e-4dc2-a385-657084313be2.png">

### Если незарегистрированный пользователь, или пользователь, у которого меньше прав доступа, чем у группы "editor", то ему не будет доступна вкладка "Добавить урок"
 <img width="1431" alt="Снимок экрана 2021-12-29 в 13 10 21" src="https://user-images.githubusercontent.com/63124387/147656377-be274ad0-a8d1-441f-b36b-a8ec4936a65c.png">

### Видна новая вкладка "Добавить урок"

<img width="1432" alt="Снимок экрана 2021-12-29 в 13 11 01" src="https://user-images.githubusercontent.com/63124387/147656428-c2cbaffe-e1e7-4239-ab4d-22213a182ca2.png">

### При добавлении нового урока, нужно ввести: заголовок, URL, текст урока, фото, а так же нужно выбрать категорию темы.

<img width="1434" alt="Снимок экрана 2021-12-29 в 13 13 46" src="https://user-images.githubusercontent.com/63124387/147656638-b7416a98-5b95-46d8-ae0d-376785d46f8a.png">

### Новый добавленный урок находится на сайте(с прошлого фото)
<img width="1423" alt="Снимок экрана 2021-12-29 в 13 14 24" src="https://user-images.githubusercontent.com/63124387/147656691-cea3c2ce-bbd1-4d12-9c51-ab65e4c213df.png">

### Контент вкладки "О школе"
<img width="1426" alt="Снимок экрана 2021-12-29 в 13 15 03" src="https://user-images.githubusercontent.com/63124387/147656742-5e13e8a3-3a62-452b-bad7-e51ab4c2168e.png">

### Контент вкладки "О школе"


<img width="1418" alt="Снимок экрана 2021-12-29 в 13 15 31" src="https://user-images.githubusercontent.com/63124387/147656773-aa5bc5a5-7935-48b6-b147-205d4f0a6ad9.png">

### Контент вкладки "О школе"
<img width="1438" alt="Снимок экрана 2021-12-29 в 13 15 52" src="https://user-images.githubusercontent.com/63124387/147656802-d4e84dc1-b17a-443f-92ed-111780dcf9da.png">

### На странице "О школе", можно нажать на "Пройти тестирование"
<img width="690" alt="Снимок экрана 2021-12-29 в 13 16 16" src="https://user-images.githubusercontent.com/63124387/147656827-826f209f-f504-4421-892d-a735d13c48b1.png">

### Вопрос из теста
<img width="1424" alt="Снимок экрана 2021-12-29 в 13 16 35" src="https://user-images.githubusercontent.com/63124387/147656850-a9ad68b9-a2d0-4580-b86d-8b1759ec10c9.png">

### Результаты теста, выводятся после его прохождения
<img width="1440" alt="Снимок экрана 2021-12-29 в 13 17 33" src="https://user-images.githubusercontent.com/63124387/147656941-cc8cddb2-83d9-4e05-9e13-55f5e1018c1c.png">

### Контент вкладки "Калькуляторы", был реализован калькулятор с разными функциями.
<img width="1440" alt="Снимок экрана 2021-12-29 в 13 18 12" src="https://user-images.githubusercontent.com/63124387/147656979-6ef643a9-9dbb-4b61-81bd-93ff373b8e36.png">

### Контент вкладки "Стать репетитором", Реализована форма с валидацией.
<img width="798" alt="Снимок экрана 2021-12-29 в 13 20 48" src="https://user-images.githubusercontent.com/63124387/147657180-b5a0b01b-0e0f-4114-9be8-1eb90c661ff0.png">

### Контент вкладки "Стать репетитором", реализована карта, если пользователь разрешит отслеживание своей геопозиции, то на карте построится маршрут от геопозиции пользователя до школы, так же посчитается примерное время и расстояние от школы.

<img width="854" alt="Снимок экрана 2021-12-29 в 13 21 19" src="https://user-images.githubusercontent.com/63124387/147657215-0ba8d43f-2179-47fd-a186-4250829ff81a.png">

###  Также можно посмотреть точные данные, как добраться.
<img width="466" alt="Снимок экрана 2021-12-29 в 13 27 52" src="https://user-images.githubusercontent.com/63124387/147657688-2f22bd7f-d892-4d2c-95fc-39af22e268fd.png">

### Футтер сайта, если нажать по эконкам, мы переходим на инстаграмм и фэйсбук школы.
<img width="1432" alt="Снимок экрана 2021-12-29 в 13 28 45" src="https://user-images.githubusercontent.com/63124387/147657735-24caa06a-b54e-4e4d-90eb-957448d5b445.png">
<img width="1082" alt="Снимок экрана 2021-12-29 в 13 30 33" src="https://user-images.githubusercontent.com/63124387/147657872-97711029-2041-490c-b32c-ceadfdf594a5.png">
<img width="1010" alt="Снимок экрана 2021-12-29 в 13 30 57" src="https://user-images.githubusercontent.com/63124387/147657900-bdd023b1-083c-423a-b1df-f814f7ba88f3.png">

### Контент вкладки "Тесты", на странице отображаются добавленные тесты.
<img width="1061" alt="Снимок экрана 2021-12-29 в 13 32 34" src="https://user-images.githubusercontent.com/63124387/147658040-c8b0efcf-af8b-4d28-8870-e6c83cf81b5e.png">

### При нажатии на тест открывается окно с информацией о тесте.
<img width="1100" alt="Снимок экрана 2021-12-29 в 13 33 47" src="https://user-images.githubusercontent.com/63124387/147658118-27036a2c-c7de-45a6-b41f-4e9ed600a3a8.png">

### Открывается тест математика, отображаются вопросы и таймер.
<img width="1194" alt="Снимок экрана 2021-12-29 в 13 34 39" src="https://user-images.githubusercontent.com/63124387/147658193-cbedce14-08ac-4402-be2f-e9b6f3473343.png">

### Если время закончилось, а пользователь не сохранил свои ответы, то они автоматически сохранются.
<img width="1195" alt="Снимок экрана 2021-12-29 в 13 38 32" src="https://user-images.githubusercontent.com/63124387/147658518-5af7396a-68ed-433e-9c1f-353fe0a79d10.png">

### Отображение результатов.
<img width="1155" alt="Снимок экрана 2021-12-29 в 13 39 50" src="https://user-images.githubusercontent.com/63124387/147658602-96c91a69-f995-49e4-9ea1-4f7b8027b430.png">
<img width="1213" alt="Снимок экрана 2021-12-29 в 13 40 36" src="https://user-images.githubusercontent.com/63124387/147658665-60c116f4-402e-4a6b-8239-f96c6caf079e.png">


