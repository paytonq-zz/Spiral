from django.http import HttpResponse
from django.shortcuts import render_to_response

def index(request):
    return render_to_response('index.html', {'name': 'payton'})

def hello(request):
    return HttpResponse('Hello Anton!')
