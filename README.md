
#run Django <br />

pip install -r requirements.txt <br />
python manage.py runserver <br />
====================================
#run react  <br />

npm install <br />
npm start <br />
====================================
#how to integrate react int django <br />

1-import os in settings.py (django app) <br />
2-in DIRS which inside TEMPLPATES add this line : os.path.join(BASE_DIR, 'frontend/build') <br />
3-in STATICFILES_DIRS add this line : BASE_DIR / 'frontend/build/static' 
====================================
#references <br />

*Integrate React Into  Django <br />
https://www.youtube.com/watch?v=FhkqMHxchZ8&feature=youtu.be <br />

*contact <br />
https://www.youtube.com/watch?v=PGyeSW6c0cA <br />

*chat <br />
https://www.youtube.com/watch?v=0z7CX5UWZp8&t=30s <br />












