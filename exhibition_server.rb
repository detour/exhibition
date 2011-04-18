# sudo gem install watir-webdriver 

# compatible with ruby 1.8
require 'rubygems'
require 'osc-ruby'
require 'watir-webdriver'

class ExhibitionServer
  HOST = 'localhost'
  PORT = 8080

  def initialize
    @browser = Watir::Browser.new(:chrome)
    @browser.goto("http://api.detourlab.com/exhibition")
    
    @server = OSC::Server.new( PORT )
    @client = OSC::Client.new( 'localhost', PORT )
    puts "Start listening at #{PORT}"
    
    @server.add_method '/statement/*' do | message |
      puts message.inspect
      begin
        if match = message.address.match(/\/statement\/(.*)/)
          @browser.link(:id, "statement_#{match[1]}").click
        end
      rescue
        "can't hit the click"
      end
    end
    
    @server.add_method '/search/*' do | message |
      puts message.inspect
      begin
        if match = message.address.match(/\/search\/(.*)/)
          @browser.link(:id, "search_#{match[1]}").click
        end
      rescue
        "can't hit the click"
      end
    end
    
    @server.add_method '/magnet/*' do | message |
      puts message.inspect
      begin
        if match = message.address.match(/\/magnet\/(.*)/)
          @browser.link(:id, "magnet_#{match[1]}").click
        end
      rescue
        "can't hit the click"
      end
    end
    
    @server.add_method '/monster/*' do | message |
      puts message.inspect
      begin
        if match = message.address.match(/\/monster\/(.*)/)
          @browser.link(:id, "monster_#{match[1]}").click
        end
      rescue
        "can't hit the click"
      end
    end

    loop {
      Thread.new do
        @server.run
      end

      #@client.send( OSC::Message.new( "/greeting", "hullo!" ))

      sleep( 3 )
    }
  end
end

server = ExhibitionServer.new