from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
# Create your views here.


@api_view(['GET'])
def getItems(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getItem(request, id):
    item = Item.objects.get(id=id)
    serializer = ItemSerializer(item, many=False)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def createItem(request):
    if request.method == "POST":
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
    return Response(serializer.data)


@api_view(['GET', 'PUT'])
def updateItem(request, id):
    item = Item.objects.get(id=id)
    serializer = ItemSerializer(item, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response('Error')
