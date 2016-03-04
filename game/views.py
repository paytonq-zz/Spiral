from django.http import HttpResponse
from django.shortcuts import render_to_response

sessionid = 0;

def index(request):
    global sessionid
    if 'idSet' not in request.session:
        sessionid += 1
        request.session['sessionid'] = sessionid
        request.session['idSet'] = 1
    return render_to_response('index.html', {'verify': 'Testing Django Views Successful!'})

def hello(request):
    return HttpResponse('Ajax Successful!')

def getsessionid(request):
    return HttpResponse(request.session['sessionid'])
