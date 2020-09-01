examples_of_requests.md

Активация клиента:
Запрос:
{
    "jsonrpc": "2.0",
    "method": "createCustomer",
    "params": {	
        "customerId": "79101111111"
    },
    "id": "guid-guid-1234-abcd"
}
--
Деактивация клиента:
Запрос:
{
    "jsonrpc": "2.0",
    "method": "deleteCustomer",
    "params": {
        "customerId": "79101111111"
    },
    "id": "guid-guid-1234-abcd"
}
--
Активация продукта:
Запрос:
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
--
Деактивация продукта
Запрос:
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
--
Приостановка(блокировка) продукта
Запрос:
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
--
Возобновление(разблокировка) продукта
Запрос:
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
--
Блокировка клиента
Запрос:
{
    "jsonrpc": "2.0",
    "method": "suspendCustomer",
    "params": {
        "customerId": "79101111111"
    },
    "id": "guid-guid-1234-abcd"
}
--
Разблокировка клиента
Запрос:
{
    "jsonrpc": "2.0",
    "method": "resumeCustomer",
    "params": {
        "customerId": "79101111111"
    },
    "id": "guid-guid-1234-abcd"
}
--
Запрос состояния клиента
Запрос:
{
    "jsonrpc": "2.0",
    "method": "getCustomerState",
    "params": {
        "customerId": "79101111111"
    },
    "id": "guid-guid-1234-abcd"
}
Ответ:
{
    "jsonrpc": "2.0",
    "result":
    {
        "status": "active",
        "customerId": "79101111111",
        "customerData": [],
        "products": [
            {
                "productCode": " crm_self_employed ",
                "productStatus": "active",
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
   			}
        ]
    },
    "id": "guid-guid-1234-abcd"
}