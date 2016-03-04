from django.http import HttpResponse
from django.shortcuts import render_to_response


def index(request):
    request.session['idSet'] = 1
    return render_to_response('index.html', {'verify': 'Testing Django Views Successful!'})

def hello(request):
    return HttpResponse('Ajax Successful!')

def getsessionid(request):
    return HttpResponse(request.session._session_key)
