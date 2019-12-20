import Keycloak from 'keycloak-js'
import keycloakConfig from '../config/keycloak.json'

const keycloak = new Keycloak(keycloakConfig)

export default keycloak
