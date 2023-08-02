from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Post
from .serializer import PostSerializer
from django.contrib.auth.models import User


# Create your views here.
class PostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # TODO
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]

