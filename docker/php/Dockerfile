FROM php:7.4-fpm-bullseye

RUN apt-get update && apt-get install -y --fix-missing \
    mariadb-client \
    imagemagick \
    graphviz \
    git \
    libpng-dev \
    libfreetype6-dev \
    libwebp-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libxml2-dev \
    libxslt1-dev \
    wget \
    sudo \
    linux-libc-dev \
    libyaml-dev \
    libzip-dev \
    libicu-dev \
    libpq-dev \
    libssl-dev && \
    rm -r /var/lib/apt/lists/*

RUN adduser --disabled-password --gecos '' admin
RUN adduser admin sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install \
    gd \
    mysqli \
    pdo_mysql \
    xsl \
    opcache \
    calendar \
    intl \
    exif \
    ftp \
    bcmath \
    zip

RUN sudo docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg --with-webp

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

USER admin
WORKDIR /var/www/html
VOLUME /var/www/html
