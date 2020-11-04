<?php

namespace Drupal\fn_data\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Site\Settings;

/**
 * Provides a fn_data form.
 */
class DataForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'fn_data_data';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['message'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Message'),
    ];

    $form['actions'] = [
      '#type' => 'actions',
    ];
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Send'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->messenger()->addStatus($this->t('The message has been sent.'));
    $form_state->setRedirect('<front>');
  }

  /**
   * Fonction pour récupérer un championnat.
   *
   * @param $nomChampionnat
   */
  public function getChampionnat($nomChampionnat) {
    switch ($nomChampionnat) {
      case 'Ligue 1':
      default:
        $idChampionnat  = 1;
        break;
      case 'Premier League':
        $idChampionnat  = 2;
        break;
      case 'Liga':
        $idChampionnat  = 3;
        break;
      case 'Ligue 2':
        $idChampionnat  = 4;
        break;
      case 'Serie A':
        $idChampionnat  = 5;
        break;
      case 'LDC':
        $idChampionnat  = 6;
        break;
    }

    $mpgURL = Settings::get('mpg-url');
    $url = sprintf('%s/stats/championship/%s', $mpgURL, $idChampionnat);

    $httpClient = \Drupal::httpClient();
    $client = \Drupal::httpClient();
    $request = $client->get($url);
    $resultat = $request->getBody()->getContents();
    $decodeResultat = json_decode($resultat, TRUE);
    return $decodeResultat;
  }

  /**
   * Fonction pour récupérer une journée d'un championnat.
   *
   * @param $championnatID
   * @param $numeroJounee
   */
  public function getJournee($championnatID, $numeroJounee) {
    $mpgURL = Settings::get('mpg-url');
    $url = sprintf('%s/championship/%s/calendar/%s', $mpgURL, $championnatID, $numeroJounee);

    $httpClient = \Drupal::httpClient();
    $client = \Drupal::httpClient();
    $request = $client->get($url);
    $resultat = $request->getBody()->getContents();
    $decodeResultat = json_decode($resultat, TRUE);
    return $decodeResultat;
  }

  /**
   * Fonction pour récupérer un match.
   *
   * @param $matchID
   */
  public function getMatch($matchID) {
    $mpgURL = Settings::get('mpg-url');
    $url = sprintf('%s/championship/match/%s', $mpgURL, $matchID);

    $httpClient = \Drupal::httpClient();
    $client = \Drupal::httpClient();
    $request = $client->get($url);
    $resultat = $request->getBody()->getContents();
    $decodeResultat = json_decode($resultat, TRUE);
    return $decodeResultat;
  }

  /**
   * Fonction pour récupérer un joueur.
   *
   * @param $joueurID
   */
  public function getJoueur($joueurID) {
    $mpgURL = Settings::get('mpg-url');
    $url = sprintf('%s/stats/player/%s', $mpgURL, $joueurID);

    $httpClient = \Drupal::httpClient();
    $client = \Drupal::httpClient();
    $request = $client->get($url);
    $resultat = $request->getBody()->getContents();
    $decodeResultat = json_decode($resultat, TRUE);
    return $decodeResultat;
  }
}
