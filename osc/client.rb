require 'rubygems'
require 'osc'

Host = 'localhost'
Port = 5000

c = OSC::UDPSocket.new
m = OSC::Message.new('/p/search', 'i', 10)
c.send m, 0, Host, Port