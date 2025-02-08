class ApplicationController < ActionController::API
  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end
  # helper_method :current_user

  # def set_current_user
  #   received_access_token = request.headers["Authorization"].split(' ').last

  #   # Rails.logger.info "User ID in session: #{session[:user_id]}"
  #   # Rails.logger.info "Received access token: #{received_access_token}"

  #   if session[:user_id] && session[:access_token] == received_access_token
  #     @current_user = User.find_by(id: session[:user_id])
  #   else
  #     session.delete(:access_token)
  #     user_info = fetch_user_info_from_google(received_access_token)
  #     @current_user = User.find_by(uid: user_info['sub']) 

  #     session[:user_id] = @current_user.id
  #     session[:access_token] = received_access_token
  #   end
  #   Rails.logger.info "@current_user: #{@current_user.inspect}"
  # end
end
