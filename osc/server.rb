# installation
# sudo gem install rb-appscript
# sudo gem install safariwatir 

require 'rubygems'
require 'safariwatir'

require 'osc'

class ExhibitionServer
  HOST = 'localhost'
  PORT = 3000

  def initialize
    server = OSC::UDPServer.new
    server.bind HOST, PORT
    puts "Start listening at #{PORT}"
    
    browser = Watir::Safari.new

    server.add_method '/multi/*', 'i' do |msg|
      domain, port, host, ip = msg.source
      puts "#{msg.address} -> #{msg.args.inspect} from #{host}:#{port}"
      if msg.address =~ /magnet/
        browser.goto("http://magnet.detourlab.com")
      elsif msg.address =~ /monster/
        browser.goto("http://monster.detourlab.com")
      elsif msg.address =~ /search/
        browser.goto("http://search.detourlab.com")
      end
    end

    loop {
      Thread.new do
        server.serve
      end
      sleep 5
    }
  end
end

s = ExhibitionServer.new