from django.urls import path
from .views import *

urlpatterns = [
    path('items', getItems),
    path('item/<int:id>/', getItem),
    path('create/', createItem),
    path('update/<int:id>/', updateItem),
]
