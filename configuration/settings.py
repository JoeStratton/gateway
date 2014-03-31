"""
Django settings for gateway project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import sys


BASE_DIR = os.path.dirname(os.path.dirname(__file__))

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, "gateway/views")
)

FIXTURE_DIRS = (
    os.path.join(BASE_DIR, "gateway/fixture")
)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '8510tc3uzde_3d_4(*97f73*(za7&&7@&%137-@eg2%+*2=3b4'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.core.mail',
    'registration',
    'widget_tweaks',
    'gateway',
    'haystack'

)

HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'haystack.backends.simple_backend.SimpleEngine',
    },
}

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader'
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'configuration.urls'

WSGI_APPLICATION = 'configuration.wsgi.application'

# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'gateway',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': 'localhost',
        'PORT': '',
        'OPTIONS': {
            # 'init_command' : 'SET storage_engine=MyISAM',
        }
    }
}

AUTH_PROFILE_MODULE = 'gateway.Profile'

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/Phoenix'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "bootstrap/dist"),
)

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'gateway/static')

# Email Server Settings --can change
SITE_ID = 'gatewaygame.com'
ACCOUNT_ACTIVATION_DAYS = 4
LOGIN_REDIRECT_URL = '/accounts/login'

# Email Server Settings --dont change
EMAIL_HOST = 'mail.gatewaygame.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_USE_SSL = True
EMAIL_HOST_USER = 'registration@gatewaygame.com'
EMAIL_HOST_PASSWORD = 'TeamHEntrepreneurship'
DEFAULT_FROM_EMAIL = 'registration@gatewaygame.com'
