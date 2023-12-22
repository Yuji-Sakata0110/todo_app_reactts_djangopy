from django.contrib import admin
from .models import Todo


# admin画面にモデル情報を追加
class TodoAdmin(admin.ModelAdmin):
    list_display: tuple = ("title", "completed")


admin.site.register(Todo, TodoAdmin)
