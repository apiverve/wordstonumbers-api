# Words to Numbers API - PHP Package

Words to Numbers converts spelled-out number phrases into numeric digits. Pass written words to receive the calculated number, formatted English notation, and total digit counts.

## Installation

Install via Composer:

```bash
composer require apiverve/wordstonumbers
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Wordstonumbers\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['words' => 'seven thousand six hundred and twenty']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Wordstonumbers\Client;
use APIVerve\Wordstonumbers\Exceptions\APIException;
use APIVerve\Wordstonumbers\Exceptions\ValidationException;

try {
    $response = $client->execute(['words' => 'seven thousand six hundred and twenty']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "number": "7620",
    "words": "seven thousand, six hundred twenty",
    "ordinal": "seven thousand, six hundred twentieth",
    "numberOfDigits_numeric": 4,
    "numberOfDigits_words": "four",
    "eachNumber": [
      "seven",
      "six",
      "two",
      "zero"
    ]
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordstonumbers?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordstonumbers?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordstonumbers?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
