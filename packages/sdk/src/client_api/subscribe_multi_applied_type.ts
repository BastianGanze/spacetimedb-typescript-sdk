// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN YOUR MODULE SOURCE CODE INSTEAD.

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import {
  AlgebraicType,
  AlgebraicValue,
  BinaryReader,
  BinaryWriter,
  CallReducerFlags,
  ConnectionId,
  DbConnectionBuilder,
  DbConnectionImpl,
  DbContext,
  ErrorContextInterface,
  Event,
  EventContextInterface,
  Identity,
  ProductType,
  ProductTypeElement,
  ReducerEventContextInterface,
  SubscriptionBuilderImpl,
  SubscriptionEventContextInterface,
  SumType,
  SumTypeVariant,
  TableCache,
  TimeDuration,
  Timestamp,
  deepEqual,
} from '../index';
import { QueryId as __QueryId } from './query_id_type';
import { DatabaseUpdate as __DatabaseUpdate } from './database_update_type';

export type SubscribeMultiApplied = {
  requestId: number;
  totalHostExecutionDurationMicros: bigint;
  queryId: __QueryId;
  update: __DatabaseUpdate;
};

/**
 * A namespace for generated helper functions.
 */
export namespace SubscribeMultiApplied {
  /**
   * A function which returns this type represented as an AlgebraicType.
   * This function is derived from the AlgebraicType used to generate this type.
   */
  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement('requestId', AlgebraicType.createU32Type()),
      new ProductTypeElement(
        'totalHostExecutionDurationMicros',
        AlgebraicType.createU64Type()
      ),
      new ProductTypeElement('queryId', __QueryId.getTypeScriptAlgebraicType()),
      new ProductTypeElement(
        'update',
        __DatabaseUpdate.getTypeScriptAlgebraicType()
      ),
    ]);
  }

  export function serialize(
    writer: BinaryWriter,
    value: SubscribeMultiApplied
  ): void {
    SubscribeMultiApplied.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): SubscribeMultiApplied {
    return SubscribeMultiApplied.getTypeScriptAlgebraicType().deserialize(
      reader
    );
  }
}
