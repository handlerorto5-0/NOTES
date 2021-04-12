Нужно реализовать тестовую интеграцию с МТС.

1. Реализовать ручку, обрабатывающую POST запросы о состоянии подписок.

- Запрос на активацию тарифа:

{
    "jsonrpc": "2.0",
    "method": "createProduct",
    "params":
    {
        "customerId": "79101111111",
        "productCode": "crm_self_employed",
        "productData": [
            {
                "name": "id",
                "value": "5489rmwd"
            },
            {
                "name": "billingPeriod",
                "value": "month"
            },
            {
                "name": "employeeNumber",
                "value": "2"
            },
            {
                "name": "filialNumber",
                "value": "1"
            }
        ]
    },
    "id": "guid-guid-1234-abcd"
}

Где `id` - уникальный идентификатор активируемой подписки,
`billingPeriod` - период, по окончании которого подписка завершается,
`employeeNumber` - максимальное количество мастеров в филиале,
`filialNumber` - количество филиалов, далее `квота`,
`customerId` - идентификатор владельца

- Запрос на деактивацию, приостановку, возобновление подписки:

{
    "jsonrpc": "2.0",
    "method": "deleteProduct",
    "params": {
        "customerId": "79101111111",
        "productCode": "crm_self_employed",
        "productData": [
            {
                "name": "id",
                "value": "5489rmwd"
            }
        ]
    }
    "id": "guid-guid-1234-abcd"
}

{
    "jsonrpc": "2.0",
    "method": "suspendProduct",
    "params": {
        "customerId": "79101111111",
        "productCode": "crm_self_employed",
        "productData": [
            {
                "name": "id",
                "value": "5489rmwd"
            }
        ]
    }
    "id": "guid-guid-1234-abcd"
}

{
    "jsonrpc": "2.0",
    "method": "resumeProduct",
    "params": {
        "customerId": "79101111111",
        "productCode": "crm_self_employed",
        "productData": [
            {
                "name": "id",
                "value": "5489rmwd"
            }
        ]
    }
    "id": "guid-guid-1234-abcd"
}

Сохранить в базу. Не нужно удалять записи в базе, просто проставить нужное состояние. Ответить на запросы 200 OK. Даже если не можем обработать запрос.

2. Реализовать ручку, прикрепляющую салон к подписке. Модель в запросе следующая:

{
    "salon_id": "String", // идентификатор салона, прикрепляемого к подписке
    "subscription_id": "String" // идентификатор подписки (из п.1)
}

Сохранить в базу. Внимание - у подписки есть ограничение на количество салонов, необходимо вернуть ошибку, если суммарное количество прикрепленных салонов больше квоты. Вернуть ошибку, если салон/подписка не найдены. В модели ошибки возвращать только код. Статус всегда 200.