# abstract-log

This npm package comprises the abstract core of the dreipol vue and react log utils. 

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Purpose
*abstract-log* simplifies the addition of a logger with multiple log levels to a host object.

## Config
You can pass the following options keys:

### `@property logger {Object}`
The log methods will be bound to this property as `this` value.

### `@property middlewares {Array}`
The log output is controlled by passing a series of methods. As the first argument, every middleware will receive the 
input array as the first argument and a data object with the following keys as the second argument:

#### `@param o.config {Object}`
The logger's configuration object.

#### `@param o.level {Object}`
The invoked log level's config object that was passed within the `levels` config key.

#### `@param o.vm {ViewModel}`
When used within a vue component, the component instance that invoked the log method is passed as `vm`.

#### `@param o.statements {Array}`
This property is only defined, when `proxy` is set to `false`! <br> 
The array contains the arguments that the log method has been invoked with.

#### `@return {Array}`
The method's output is expected to be an array that is passed to the log method as an arglist.

### `@property proxy {boolean}`
When this value is set to true, the log method will be directly bound to the `logger` value. You will lose the access 
to the log method arguments in the `loggerArgs` method. This is necessary for exmaple to ensure that stack traces in 
the console will maintain their original value instead of being bound to this plugin. <br> 
If you don't use console logs or don't need original stack traces, you can disable this option and gain
the ability to customize your log messages according to the passed arguments.

### `@param context {any}`
A completely customizable property that has been passed in the config when creating the logger.

### `@property levels {Array}`
A list of log level objects that can be invoked by the logger. Each log level must contain at least the following keys:

#### `@property fn {Function}`
The log method that is being used by the log level.

#### `@property name {string}`
The logger will have a function of this name to invoke a log message.

### `@property filter {Function}`
A method that receives the same object as the `loggerArgs` method. <br>
The log message will be hidden in case of a falsey return value.

## 
[travis-image]: https://img.shields.io/travis/dreipol/abstract-log.svg?style=flat-square
[travis-url]: https://travis-ci.org/dreipol/abstract-log
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: http://img.shields.io/npm/v/@dreipol/abstract-log.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/@dreipol/abstract-log.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@dreipol/abstract-log
