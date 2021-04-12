# Task: доработать модель данных чтобы хранить:

## вводные:
### mts oauth client:
- mts_auth_controller.rb
- app/lib/mts_oauth_client.rb 
- gem 'oauth2'

### salons:

### date model(schema p.p.):
- 1096  table "salons"
- 1442  table "sessions" (вероятно)


### notes:
- общая схема , все посты сохраняютя подряд, потом забирается самая свежая запись, память чистится
- как обрабатывать ошибки приходящие от сервиса?
- админ будет вводить данные о тарифах вручную?
- джобер для очистки памяти , нужна глоб переменная с макимальным сроком и будет всё редис

### my problems:
- подключить дамп из загрузки телеграм


### test-task
- rails api handling inner post 

files:
route subcriptions
app/controllers/subscriptions_controller.rb
app/helpers/subscriptions_helper.rb
app/models/subscription.rb
db/migrate/20200829184417_create_subscriptions.rb
spec/controllers/subscriptions_controller_spec.rb
spec/helpers/subscriptions_helper_spec.rb
spec/models/subscription_spec.rb
spec/factories/subscriptions.rb

http :3000/blah
http POST :3000/blah  hello=word