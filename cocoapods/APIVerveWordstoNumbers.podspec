Pod::Spec.new do |s|
  s.name             = 'APIVerveWordstoNumbers'
  s.version          = '1.2.3'
  s.summary          = 'Words to Numbers converts spelled-out number phrases into numeric digits.'
  s.description      = <<-'DESC'
Words to Numbers converts spelled-out number phrases into numeric digits. Pass written words to receive the calculated number, formatted English notation, and total digit counts.

This iOS/macOS SDK provides a convenient way to access the Words to Numbers from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/wordstonumbers?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/wordstonumbers-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveWordstoNumbers/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
