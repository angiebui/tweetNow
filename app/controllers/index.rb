# get '/' do
#   # Look in app/views/index.erb
#   erb :index
# end

get '/' do

  erb :index
end

post '/' do
  Twitter.update(params[:tweet])

end

