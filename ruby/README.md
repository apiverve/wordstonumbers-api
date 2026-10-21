# Words to Numbers API - Ruby Gem

Words to Numbers converts spelled-out number phrases into numeric digits. Pass written words to receive the calculated number, formatted English notation, and total digit counts.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_wordstonumbers'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_wordstonumbers
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_wordstonumbers'

# Initialize the client
client = APIVerve::Wordstonumbers::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ words: "seven thousand six hundred and twenty" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ words: "seven thousand six hundred and twenty" })
  puts response["data"]
rescue APIVerve::Wordstonumbers::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Wordstonumbers::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Wordstonumbers::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordstonumbers?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordstonumbers?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordstonumbers?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
