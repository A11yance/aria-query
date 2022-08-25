/**
 * @flow
 */
import graphicsDocumentRole from './graphics/graphicsDocumentRole';
import graphicsObjectRole from './graphics/graphicsObjectRole';
import graphicsSymbolRole from './graphics/graphicsSymbolRole';

const ariaGraphicsRoles: RoleDefinitions = [
  ['graphics-document', graphicsDocumentRole],
  ['graphics-object', graphicsObjectRole],
  ['graphics-symbol', graphicsSymbolRole]
];

export default ariaGraphicsRoles;