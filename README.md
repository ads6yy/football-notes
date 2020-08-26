# Template Drupal+Docker (nginx-php-mariadb)
<i>Drupal 9.0.3 - nginx:alpine - php:7.4.9-fpm - mariadb</i>

### How to start with this template ?
- [ ] ``composer install``
- [ ] Create .env with .env.example
- [ ] Change database variables in .env and [settings.php](./web/sites/default/settings.php)
- [ ] Change website URL in [site.conf](./docker/nginx-conf/site.conf) and add it to your "hosts" file
- [ ] Change "trusted_host_patterns" parameter in [settings.php](./web/sites/default/settings.php)
- [ ] Make sure ports in [docker-compose.yml](./docker-compose.yml) are free to use
- [ ] Change mariadb volume's name's if a docker volume already exist with this specific name
- [ ] ``docker-compose up -d --build``
- [ ] ``docker-compose exec php vendor/bin/drush cr``
- [ ] Access to your website URL
- [ ] Process Drupal installation


### Useful commands
- Launch dockers : ``docker-compose up -d``
- Launch and rebuild dockers : ``docker-compose up -d --build``
- Stop dockers : ``docker-compose down``
- Clean up unused images : ``docker image prune``
- List dockers volumes : ``docker volume ps``
- Remove dockers volumes : ``docker volume rm volume_name``
- Clean up unused volumes : ``docker volume prune``
- Check dockers status : ``docker-compose ps``
- Check dockers' logs (nginx/php/mariadb) : ``docker-compose logs php``
- Access dockers (nginx/php/mariadb) : ``docker-compose exec php bash``
##### Commands inside PHP docker :
- Clear caches : ``vendor/bin/drush cr``
- Export Drupal config : ``vendor/bin/drush cex``
- Import Drupal config : ``vendor/bin/drush cim``
- Download Drupal module : ``composer require drupal/module_name``
- Remove Drupal module : ``composer remove drupal/module_name``
- Install Drupal module : ``vendor/bin/drush en module_name``
- Uninstall Drupal module : ``vendor/bin/drush pmu module_name``


#### Must-have Drupal modules
- [admin_toolbar](https://www.drupal.org/project/admin_toolbar)
- [devel](https://www.drupal.org/project/devel)
- [paragraphs](https://www.drupal.org/project/paragraphs)
- [pathauto](https://www.drupal.org/project/pathauto)
- [webform](https://www.drupal.org/project/webform)
