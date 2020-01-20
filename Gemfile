source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
gem 'sqlite3', '1.3.13'
gem 'puma', '~> 4.1'
gem 'redis', '~> 4.0'
gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem "jwt_sessions"
gem 'rack-cors'

group :development, :test do
  gem 'pry-rails'
  gem 'brakeman', require: false
  gem 'bundler-audit', require: false
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'letter_opener_web', github: 'fgrehm/letter_opener_web', ref: 'd6c6455'
  gem 'parallel_tests'
  gem 'rails_best_practices'
  gem 'slim_lint', require: false
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'
  gem 'foreman'
  gem 'meta_request'
  gem 'overcommit'
  gem 'rack-mini-profiler', require: false
  gem 'rails-erd'
  gem 'reek', require: false
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubycritic', require: false
  gem 'sandi_meter', require: false
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'email_spec'
  gem 'rspec-benchmark'
  gem 'rspec-json_expectations'
  gem 'rspec-rails'
  gem 'rspec_junit_formatter'
  gem 'selenium-webdriver'
  gem 'simplecov', require: false
  gem 'timecop'
  gem 'vcr'
  gem 'webdrivers'
  gem 'webmock'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
