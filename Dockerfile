FROM node:16

# Set working directory
WORKDIR /var/www

# get latest nodejs
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
# RUN apt-get install -y nodejs
# RUN apt-get install -y nano
# RUN npm install npm@latest -g && \
#     npm install n -g && \
#     n latest
# Install Yarn
#RUN npm install --global yarn

#npm install
#RUN bash -c "cd /var/www/src; npm install"
