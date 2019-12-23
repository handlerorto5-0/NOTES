GoF - gang of four - банда четырёх, гуглить патерны
===================================================
SINGLETON- один обьект на всех, методы вызываются без 
создания экземпляра, в rails есть специальное (49-2 прощай завод, подробно)

require 'singleton'

class Loger
  include Singleton

  def initialize
    @f=File.open 'log.txt', 'a'
  end

  def log_something what    
    @f.puts what
    @f.flush
  end

end

Loger.instance.log_something 'Attention! Balmaley go-go!'
======================================================