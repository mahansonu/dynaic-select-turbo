class HomeController < ApplicationController
  def index
    @countries = CS.countries
  end
end
