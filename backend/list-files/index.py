import os
import boto3
import json

def handler(event: dict, context) -> dict:
    """Возвращает список файлов из S3 хранилища проекта"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    response = s3.list_objects_v2(Bucket='files')
    key_id = os.environ['AWS_ACCESS_KEY_ID']

    files = []
    for obj in response.get('Contents', []):
        key = obj['Key']
        if any(key.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
            url = f"https://cdn.poehali.dev/projects/{key_id}/bucket/{key}"
            files.append({'key': key, 'url': url, 'size': obj['Size']})

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'files': files, 'total': len(files)})
    }
