# Adsy - football notes

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
