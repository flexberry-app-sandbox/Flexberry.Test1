import { Serializer as TestSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-test';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TestSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
