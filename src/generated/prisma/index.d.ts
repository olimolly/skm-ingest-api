
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ReforgerSession
 * 
 */
export type ReforgerSession = $Result.DefaultSelection<Prisma.$ReforgerSessionPayload>
/**
 * Model ReforgerEvent
 * 
 */
export type ReforgerEvent = $Result.DefaultSelection<Prisma.$ReforgerEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ReforgerSessions
 * const reforgerSessions = await prisma.reforgerSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ReforgerSessions
   * const reforgerSessions = await prisma.reforgerSession.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.reforgerSession`: Exposes CRUD operations for the **ReforgerSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReforgerSessions
    * const reforgerSessions = await prisma.reforgerSession.findMany()
    * ```
    */
  get reforgerSession(): Prisma.ReforgerSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reforgerEvent`: Exposes CRUD operations for the **ReforgerEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReforgerEvents
    * const reforgerEvents = await prisma.reforgerEvent.findMany()
    * ```
    */
  get reforgerEvent(): Prisma.ReforgerEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ReforgerSession: 'ReforgerSession',
    ReforgerEvent: 'ReforgerEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "reforgerSession" | "reforgerEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ReforgerSession: {
        payload: Prisma.$ReforgerSessionPayload<ExtArgs>
        fields: Prisma.ReforgerSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReforgerSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReforgerSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>
          }
          findFirst: {
            args: Prisma.ReforgerSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReforgerSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>
          }
          findMany: {
            args: Prisma.ReforgerSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>[]
          }
          create: {
            args: Prisma.ReforgerSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>
          }
          createMany: {
            args: Prisma.ReforgerSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReforgerSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>[]
          }
          delete: {
            args: Prisma.ReforgerSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>
          }
          update: {
            args: Prisma.ReforgerSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>
          }
          deleteMany: {
            args: Prisma.ReforgerSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReforgerSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReforgerSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>[]
          }
          upsert: {
            args: Prisma.ReforgerSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerSessionPayload>
          }
          aggregate: {
            args: Prisma.ReforgerSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReforgerSession>
          }
          groupBy: {
            args: Prisma.ReforgerSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReforgerSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReforgerSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ReforgerSessionCountAggregateOutputType> | number
          }
        }
      }
      ReforgerEvent: {
        payload: Prisma.$ReforgerEventPayload<ExtArgs>
        fields: Prisma.ReforgerEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReforgerEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReforgerEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>
          }
          findFirst: {
            args: Prisma.ReforgerEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReforgerEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>
          }
          findMany: {
            args: Prisma.ReforgerEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>[]
          }
          create: {
            args: Prisma.ReforgerEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>
          }
          createMany: {
            args: Prisma.ReforgerEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReforgerEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>[]
          }
          delete: {
            args: Prisma.ReforgerEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>
          }
          update: {
            args: Prisma.ReforgerEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>
          }
          deleteMany: {
            args: Prisma.ReforgerEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReforgerEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReforgerEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>[]
          }
          upsert: {
            args: Prisma.ReforgerEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReforgerEventPayload>
          }
          aggregate: {
            args: Prisma.ReforgerEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReforgerEvent>
          }
          groupBy: {
            args: Prisma.ReforgerEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReforgerEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReforgerEventCountArgs<ExtArgs>
            result: $Utils.Optional<ReforgerEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    reforgerSession?: ReforgerSessionOmit
    reforgerEvent?: ReforgerEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ReforgerSessionCountOutputType
   */

  export type ReforgerSessionCountOutputType = {
    events: number
  }

  export type ReforgerSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ReforgerSessionCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ReforgerSessionCountOutputType without action
   */
  export type ReforgerSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSessionCountOutputType
     */
    select?: ReforgerSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReforgerSessionCountOutputType without action
   */
  export type ReforgerSessionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReforgerEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ReforgerSession
   */

  export type AggregateReforgerSession = {
    _count: ReforgerSessionCountAggregateOutputType | null
    _min: ReforgerSessionMinAggregateOutputType | null
    _max: ReforgerSessionMaxAggregateOutputType | null
  }

  export type ReforgerSessionMinAggregateOutputType = {
    id: string | null
    serverId: string | null
    sessionId: string | null
    missionId: string | null
    missionName: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReforgerSessionMaxAggregateOutputType = {
    id: string | null
    serverId: string | null
    sessionId: string | null
    missionId: string | null
    missionName: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReforgerSessionCountAggregateOutputType = {
    id: number
    serverId: number
    sessionId: number
    missionId: number
    missionName: number
    startedAt: number
    endedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReforgerSessionMinAggregateInputType = {
    id?: true
    serverId?: true
    sessionId?: true
    missionId?: true
    missionName?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReforgerSessionMaxAggregateInputType = {
    id?: true
    serverId?: true
    sessionId?: true
    missionId?: true
    missionName?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReforgerSessionCountAggregateInputType = {
    id?: true
    serverId?: true
    sessionId?: true
    missionId?: true
    missionName?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReforgerSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReforgerSession to aggregate.
     */
    where?: ReforgerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerSessions to fetch.
     */
    orderBy?: ReforgerSessionOrderByWithRelationInput | ReforgerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReforgerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReforgerSessions
    **/
    _count?: true | ReforgerSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReforgerSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReforgerSessionMaxAggregateInputType
  }

  export type GetReforgerSessionAggregateType<T extends ReforgerSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateReforgerSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReforgerSession[P]>
      : GetScalarType<T[P], AggregateReforgerSession[P]>
  }




  export type ReforgerSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReforgerSessionWhereInput
    orderBy?: ReforgerSessionOrderByWithAggregationInput | ReforgerSessionOrderByWithAggregationInput[]
    by: ReforgerSessionScalarFieldEnum[] | ReforgerSessionScalarFieldEnum
    having?: ReforgerSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReforgerSessionCountAggregateInputType | true
    _min?: ReforgerSessionMinAggregateInputType
    _max?: ReforgerSessionMaxAggregateInputType
  }

  export type ReforgerSessionGroupByOutputType = {
    id: string
    serverId: string
    sessionId: string
    missionId: string
    missionName: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReforgerSessionCountAggregateOutputType | null
    _min: ReforgerSessionMinAggregateOutputType | null
    _max: ReforgerSessionMaxAggregateOutputType | null
  }

  type GetReforgerSessionGroupByPayload<T extends ReforgerSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReforgerSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReforgerSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReforgerSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ReforgerSessionGroupByOutputType[P]>
        }
      >
    >


  export type ReforgerSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    sessionId?: boolean
    missionId?: boolean
    missionName?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | ReforgerSession$eventsArgs<ExtArgs>
    _count?: boolean | ReforgerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reforgerSession"]>

  export type ReforgerSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    sessionId?: boolean
    missionId?: boolean
    missionName?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reforgerSession"]>

  export type ReforgerSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    sessionId?: boolean
    missionId?: boolean
    missionName?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reforgerSession"]>

  export type ReforgerSessionSelectScalar = {
    id?: boolean
    serverId?: boolean
    sessionId?: boolean
    missionId?: boolean
    missionName?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReforgerSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serverId" | "sessionId" | "missionId" | "missionName" | "startedAt" | "endedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["reforgerSession"]>
  export type ReforgerSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ReforgerSession$eventsArgs<ExtArgs>
    _count?: boolean | ReforgerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReforgerSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReforgerSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReforgerSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReforgerSession"
    objects: {
      events: Prisma.$ReforgerEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serverId: string
      sessionId: string
      missionId: string
      missionName: string | null
      startedAt: Date | null
      endedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reforgerSession"]>
    composites: {}
  }

  type ReforgerSessionGetPayload<S extends boolean | null | undefined | ReforgerSessionDefaultArgs> = $Result.GetResult<Prisma.$ReforgerSessionPayload, S>

  type ReforgerSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReforgerSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReforgerSessionCountAggregateInputType | true
    }

  export interface ReforgerSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReforgerSession'], meta: { name: 'ReforgerSession' } }
    /**
     * Find zero or one ReforgerSession that matches the filter.
     * @param {ReforgerSessionFindUniqueArgs} args - Arguments to find a ReforgerSession
     * @example
     * // Get one ReforgerSession
     * const reforgerSession = await prisma.reforgerSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReforgerSessionFindUniqueArgs>(args: SelectSubset<T, ReforgerSessionFindUniqueArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReforgerSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReforgerSessionFindUniqueOrThrowArgs} args - Arguments to find a ReforgerSession
     * @example
     * // Get one ReforgerSession
     * const reforgerSession = await prisma.reforgerSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReforgerSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReforgerSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReforgerSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerSessionFindFirstArgs} args - Arguments to find a ReforgerSession
     * @example
     * // Get one ReforgerSession
     * const reforgerSession = await prisma.reforgerSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReforgerSessionFindFirstArgs>(args?: SelectSubset<T, ReforgerSessionFindFirstArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReforgerSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerSessionFindFirstOrThrowArgs} args - Arguments to find a ReforgerSession
     * @example
     * // Get one ReforgerSession
     * const reforgerSession = await prisma.reforgerSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReforgerSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReforgerSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReforgerSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReforgerSessions
     * const reforgerSessions = await prisma.reforgerSession.findMany()
     * 
     * // Get first 10 ReforgerSessions
     * const reforgerSessions = await prisma.reforgerSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reforgerSessionWithIdOnly = await prisma.reforgerSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReforgerSessionFindManyArgs>(args?: SelectSubset<T, ReforgerSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReforgerSession.
     * @param {ReforgerSessionCreateArgs} args - Arguments to create a ReforgerSession.
     * @example
     * // Create one ReforgerSession
     * const ReforgerSession = await prisma.reforgerSession.create({
     *   data: {
     *     // ... data to create a ReforgerSession
     *   }
     * })
     * 
     */
    create<T extends ReforgerSessionCreateArgs>(args: SelectSubset<T, ReforgerSessionCreateArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReforgerSessions.
     * @param {ReforgerSessionCreateManyArgs} args - Arguments to create many ReforgerSessions.
     * @example
     * // Create many ReforgerSessions
     * const reforgerSession = await prisma.reforgerSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReforgerSessionCreateManyArgs>(args?: SelectSubset<T, ReforgerSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReforgerSessions and returns the data saved in the database.
     * @param {ReforgerSessionCreateManyAndReturnArgs} args - Arguments to create many ReforgerSessions.
     * @example
     * // Create many ReforgerSessions
     * const reforgerSession = await prisma.reforgerSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReforgerSessions and only return the `id`
     * const reforgerSessionWithIdOnly = await prisma.reforgerSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReforgerSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReforgerSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReforgerSession.
     * @param {ReforgerSessionDeleteArgs} args - Arguments to delete one ReforgerSession.
     * @example
     * // Delete one ReforgerSession
     * const ReforgerSession = await prisma.reforgerSession.delete({
     *   where: {
     *     // ... filter to delete one ReforgerSession
     *   }
     * })
     * 
     */
    delete<T extends ReforgerSessionDeleteArgs>(args: SelectSubset<T, ReforgerSessionDeleteArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReforgerSession.
     * @param {ReforgerSessionUpdateArgs} args - Arguments to update one ReforgerSession.
     * @example
     * // Update one ReforgerSession
     * const reforgerSession = await prisma.reforgerSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReforgerSessionUpdateArgs>(args: SelectSubset<T, ReforgerSessionUpdateArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReforgerSessions.
     * @param {ReforgerSessionDeleteManyArgs} args - Arguments to filter ReforgerSessions to delete.
     * @example
     * // Delete a few ReforgerSessions
     * const { count } = await prisma.reforgerSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReforgerSessionDeleteManyArgs>(args?: SelectSubset<T, ReforgerSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReforgerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReforgerSessions
     * const reforgerSession = await prisma.reforgerSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReforgerSessionUpdateManyArgs>(args: SelectSubset<T, ReforgerSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReforgerSessions and returns the data updated in the database.
     * @param {ReforgerSessionUpdateManyAndReturnArgs} args - Arguments to update many ReforgerSessions.
     * @example
     * // Update many ReforgerSessions
     * const reforgerSession = await prisma.reforgerSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReforgerSessions and only return the `id`
     * const reforgerSessionWithIdOnly = await prisma.reforgerSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReforgerSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReforgerSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReforgerSession.
     * @param {ReforgerSessionUpsertArgs} args - Arguments to update or create a ReforgerSession.
     * @example
     * // Update or create a ReforgerSession
     * const reforgerSession = await prisma.reforgerSession.upsert({
     *   create: {
     *     // ... data to create a ReforgerSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReforgerSession we want to update
     *   }
     * })
     */
    upsert<T extends ReforgerSessionUpsertArgs>(args: SelectSubset<T, ReforgerSessionUpsertArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReforgerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerSessionCountArgs} args - Arguments to filter ReforgerSessions to count.
     * @example
     * // Count the number of ReforgerSessions
     * const count = await prisma.reforgerSession.count({
     *   where: {
     *     // ... the filter for the ReforgerSessions we want to count
     *   }
     * })
    **/
    count<T extends ReforgerSessionCountArgs>(
      args?: Subset<T, ReforgerSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReforgerSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReforgerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReforgerSessionAggregateArgs>(args: Subset<T, ReforgerSessionAggregateArgs>): Prisma.PrismaPromise<GetReforgerSessionAggregateType<T>>

    /**
     * Group by ReforgerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReforgerSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReforgerSessionGroupByArgs['orderBy'] }
        : { orderBy?: ReforgerSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReforgerSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReforgerSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReforgerSession model
   */
  readonly fields: ReforgerSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReforgerSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReforgerSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends ReforgerSession$eventsArgs<ExtArgs> = {}>(args?: Subset<T, ReforgerSession$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReforgerSession model
   */
  interface ReforgerSessionFieldRefs {
    readonly id: FieldRef<"ReforgerSession", 'String'>
    readonly serverId: FieldRef<"ReforgerSession", 'String'>
    readonly sessionId: FieldRef<"ReforgerSession", 'String'>
    readonly missionId: FieldRef<"ReforgerSession", 'String'>
    readonly missionName: FieldRef<"ReforgerSession", 'String'>
    readonly startedAt: FieldRef<"ReforgerSession", 'DateTime'>
    readonly endedAt: FieldRef<"ReforgerSession", 'DateTime'>
    readonly createdAt: FieldRef<"ReforgerSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ReforgerSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReforgerSession findUnique
   */
  export type ReforgerSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerSession to fetch.
     */
    where: ReforgerSessionWhereUniqueInput
  }

  /**
   * ReforgerSession findUniqueOrThrow
   */
  export type ReforgerSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerSession to fetch.
     */
    where: ReforgerSessionWhereUniqueInput
  }

  /**
   * ReforgerSession findFirst
   */
  export type ReforgerSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerSession to fetch.
     */
    where?: ReforgerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerSessions to fetch.
     */
    orderBy?: ReforgerSessionOrderByWithRelationInput | ReforgerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReforgerSessions.
     */
    cursor?: ReforgerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReforgerSessions.
     */
    distinct?: ReforgerSessionScalarFieldEnum | ReforgerSessionScalarFieldEnum[]
  }

  /**
   * ReforgerSession findFirstOrThrow
   */
  export type ReforgerSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerSession to fetch.
     */
    where?: ReforgerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerSessions to fetch.
     */
    orderBy?: ReforgerSessionOrderByWithRelationInput | ReforgerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReforgerSessions.
     */
    cursor?: ReforgerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReforgerSessions.
     */
    distinct?: ReforgerSessionScalarFieldEnum | ReforgerSessionScalarFieldEnum[]
  }

  /**
   * ReforgerSession findMany
   */
  export type ReforgerSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerSessions to fetch.
     */
    where?: ReforgerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerSessions to fetch.
     */
    orderBy?: ReforgerSessionOrderByWithRelationInput | ReforgerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReforgerSessions.
     */
    cursor?: ReforgerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReforgerSessions.
     */
    distinct?: ReforgerSessionScalarFieldEnum | ReforgerSessionScalarFieldEnum[]
  }

  /**
   * ReforgerSession create
   */
  export type ReforgerSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ReforgerSession.
     */
    data: XOR<ReforgerSessionCreateInput, ReforgerSessionUncheckedCreateInput>
  }

  /**
   * ReforgerSession createMany
   */
  export type ReforgerSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReforgerSessions.
     */
    data: ReforgerSessionCreateManyInput | ReforgerSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReforgerSession createManyAndReturn
   */
  export type ReforgerSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ReforgerSessions.
     */
    data: ReforgerSessionCreateManyInput | ReforgerSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReforgerSession update
   */
  export type ReforgerSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ReforgerSession.
     */
    data: XOR<ReforgerSessionUpdateInput, ReforgerSessionUncheckedUpdateInput>
    /**
     * Choose, which ReforgerSession to update.
     */
    where: ReforgerSessionWhereUniqueInput
  }

  /**
   * ReforgerSession updateMany
   */
  export type ReforgerSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReforgerSessions.
     */
    data: XOR<ReforgerSessionUpdateManyMutationInput, ReforgerSessionUncheckedUpdateManyInput>
    /**
     * Filter which ReforgerSessions to update
     */
    where?: ReforgerSessionWhereInput
    /**
     * Limit how many ReforgerSessions to update.
     */
    limit?: number
  }

  /**
   * ReforgerSession updateManyAndReturn
   */
  export type ReforgerSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * The data used to update ReforgerSessions.
     */
    data: XOR<ReforgerSessionUpdateManyMutationInput, ReforgerSessionUncheckedUpdateManyInput>
    /**
     * Filter which ReforgerSessions to update
     */
    where?: ReforgerSessionWhereInput
    /**
     * Limit how many ReforgerSessions to update.
     */
    limit?: number
  }

  /**
   * ReforgerSession upsert
   */
  export type ReforgerSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ReforgerSession to update in case it exists.
     */
    where: ReforgerSessionWhereUniqueInput
    /**
     * In case the ReforgerSession found by the `where` argument doesn't exist, create a new ReforgerSession with this data.
     */
    create: XOR<ReforgerSessionCreateInput, ReforgerSessionUncheckedCreateInput>
    /**
     * In case the ReforgerSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReforgerSessionUpdateInput, ReforgerSessionUncheckedUpdateInput>
  }

  /**
   * ReforgerSession delete
   */
  export type ReforgerSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
    /**
     * Filter which ReforgerSession to delete.
     */
    where: ReforgerSessionWhereUniqueInput
  }

  /**
   * ReforgerSession deleteMany
   */
  export type ReforgerSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReforgerSessions to delete
     */
    where?: ReforgerSessionWhereInput
    /**
     * Limit how many ReforgerSessions to delete.
     */
    limit?: number
  }

  /**
   * ReforgerSession.events
   */
  export type ReforgerSession$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    where?: ReforgerEventWhereInput
    orderBy?: ReforgerEventOrderByWithRelationInput | ReforgerEventOrderByWithRelationInput[]
    cursor?: ReforgerEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReforgerEventScalarFieldEnum | ReforgerEventScalarFieldEnum[]
  }

  /**
   * ReforgerSession without action
   */
  export type ReforgerSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerSession
     */
    select?: ReforgerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerSession
     */
    omit?: ReforgerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerSessionInclude<ExtArgs> | null
  }


  /**
   * Model ReforgerEvent
   */

  export type AggregateReforgerEvent = {
    _count: ReforgerEventCountAggregateOutputType | null
    _avg: ReforgerEventAvgAggregateOutputType | null
    _sum: ReforgerEventSumAggregateOutputType | null
    _min: ReforgerEventMinAggregateOutputType | null
    _max: ReforgerEventMaxAggregateOutputType | null
  }

  export type ReforgerEventAvgAggregateOutputType = {
    oldState: number | null
    newState: number | null
  }

  export type ReforgerEventSumAggregateOutputType = {
    oldState: number | null
    newState: number | null
  }

  export type ReforgerEventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    sessionDbId: string | null
    type: string | null
    taskId: string | null
    oldState: number | null
    oldStateName: string | null
    newState: number | null
    newStateName: string | null
    eventTimestamp: Date | null
    createdAt: Date | null
  }

  export type ReforgerEventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    sessionDbId: string | null
    type: string | null
    taskId: string | null
    oldState: number | null
    oldStateName: string | null
    newState: number | null
    newStateName: string | null
    eventTimestamp: Date | null
    createdAt: Date | null
  }

  export type ReforgerEventCountAggregateOutputType = {
    id: number
    eventId: number
    sessionDbId: number
    type: number
    taskId: number
    oldState: number
    oldStateName: number
    newState: number
    newStateName: number
    eventTimestamp: number
    rawJson: number
    createdAt: number
    _all: number
  }


  export type ReforgerEventAvgAggregateInputType = {
    oldState?: true
    newState?: true
  }

  export type ReforgerEventSumAggregateInputType = {
    oldState?: true
    newState?: true
  }

  export type ReforgerEventMinAggregateInputType = {
    id?: true
    eventId?: true
    sessionDbId?: true
    type?: true
    taskId?: true
    oldState?: true
    oldStateName?: true
    newState?: true
    newStateName?: true
    eventTimestamp?: true
    createdAt?: true
  }

  export type ReforgerEventMaxAggregateInputType = {
    id?: true
    eventId?: true
    sessionDbId?: true
    type?: true
    taskId?: true
    oldState?: true
    oldStateName?: true
    newState?: true
    newStateName?: true
    eventTimestamp?: true
    createdAt?: true
  }

  export type ReforgerEventCountAggregateInputType = {
    id?: true
    eventId?: true
    sessionDbId?: true
    type?: true
    taskId?: true
    oldState?: true
    oldStateName?: true
    newState?: true
    newStateName?: true
    eventTimestamp?: true
    rawJson?: true
    createdAt?: true
    _all?: true
  }

  export type ReforgerEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReforgerEvent to aggregate.
     */
    where?: ReforgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerEvents to fetch.
     */
    orderBy?: ReforgerEventOrderByWithRelationInput | ReforgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReforgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReforgerEvents
    **/
    _count?: true | ReforgerEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReforgerEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReforgerEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReforgerEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReforgerEventMaxAggregateInputType
  }

  export type GetReforgerEventAggregateType<T extends ReforgerEventAggregateArgs> = {
        [P in keyof T & keyof AggregateReforgerEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReforgerEvent[P]>
      : GetScalarType<T[P], AggregateReforgerEvent[P]>
  }




  export type ReforgerEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReforgerEventWhereInput
    orderBy?: ReforgerEventOrderByWithAggregationInput | ReforgerEventOrderByWithAggregationInput[]
    by: ReforgerEventScalarFieldEnum[] | ReforgerEventScalarFieldEnum
    having?: ReforgerEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReforgerEventCountAggregateInputType | true
    _avg?: ReforgerEventAvgAggregateInputType
    _sum?: ReforgerEventSumAggregateInputType
    _min?: ReforgerEventMinAggregateInputType
    _max?: ReforgerEventMaxAggregateInputType
  }

  export type ReforgerEventGroupByOutputType = {
    id: string
    eventId: string
    sessionDbId: string
    type: string
    taskId: string | null
    oldState: number | null
    oldStateName: string | null
    newState: number | null
    newStateName: string | null
    eventTimestamp: Date
    rawJson: JsonValue
    createdAt: Date
    _count: ReforgerEventCountAggregateOutputType | null
    _avg: ReforgerEventAvgAggregateOutputType | null
    _sum: ReforgerEventSumAggregateOutputType | null
    _min: ReforgerEventMinAggregateOutputType | null
    _max: ReforgerEventMaxAggregateOutputType | null
  }

  type GetReforgerEventGroupByPayload<T extends ReforgerEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReforgerEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReforgerEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReforgerEventGroupByOutputType[P]>
            : GetScalarType<T[P], ReforgerEventGroupByOutputType[P]>
        }
      >
    >


  export type ReforgerEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    sessionDbId?: boolean
    type?: boolean
    taskId?: boolean
    oldState?: boolean
    oldStateName?: boolean
    newState?: boolean
    newStateName?: boolean
    eventTimestamp?: boolean
    rawJson?: boolean
    createdAt?: boolean
    session?: boolean | ReforgerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reforgerEvent"]>

  export type ReforgerEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    sessionDbId?: boolean
    type?: boolean
    taskId?: boolean
    oldState?: boolean
    oldStateName?: boolean
    newState?: boolean
    newStateName?: boolean
    eventTimestamp?: boolean
    rawJson?: boolean
    createdAt?: boolean
    session?: boolean | ReforgerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reforgerEvent"]>

  export type ReforgerEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    sessionDbId?: boolean
    type?: boolean
    taskId?: boolean
    oldState?: boolean
    oldStateName?: boolean
    newState?: boolean
    newStateName?: boolean
    eventTimestamp?: boolean
    rawJson?: boolean
    createdAt?: boolean
    session?: boolean | ReforgerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reforgerEvent"]>

  export type ReforgerEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    sessionDbId?: boolean
    type?: boolean
    taskId?: boolean
    oldState?: boolean
    oldStateName?: boolean
    newState?: boolean
    newStateName?: boolean
    eventTimestamp?: boolean
    rawJson?: boolean
    createdAt?: boolean
  }

  export type ReforgerEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "sessionDbId" | "type" | "taskId" | "oldState" | "oldStateName" | "newState" | "newStateName" | "eventTimestamp" | "rawJson" | "createdAt", ExtArgs["result"]["reforgerEvent"]>
  export type ReforgerEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReforgerSessionDefaultArgs<ExtArgs>
  }
  export type ReforgerEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReforgerSessionDefaultArgs<ExtArgs>
  }
  export type ReforgerEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReforgerSessionDefaultArgs<ExtArgs>
  }

  export type $ReforgerEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReforgerEvent"
    objects: {
      session: Prisma.$ReforgerSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      sessionDbId: string
      type: string
      taskId: string | null
      oldState: number | null
      oldStateName: string | null
      newState: number | null
      newStateName: string | null
      eventTimestamp: Date
      rawJson: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["reforgerEvent"]>
    composites: {}
  }

  type ReforgerEventGetPayload<S extends boolean | null | undefined | ReforgerEventDefaultArgs> = $Result.GetResult<Prisma.$ReforgerEventPayload, S>

  type ReforgerEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReforgerEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReforgerEventCountAggregateInputType | true
    }

  export interface ReforgerEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReforgerEvent'], meta: { name: 'ReforgerEvent' } }
    /**
     * Find zero or one ReforgerEvent that matches the filter.
     * @param {ReforgerEventFindUniqueArgs} args - Arguments to find a ReforgerEvent
     * @example
     * // Get one ReforgerEvent
     * const reforgerEvent = await prisma.reforgerEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReforgerEventFindUniqueArgs>(args: SelectSubset<T, ReforgerEventFindUniqueArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReforgerEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReforgerEventFindUniqueOrThrowArgs} args - Arguments to find a ReforgerEvent
     * @example
     * // Get one ReforgerEvent
     * const reforgerEvent = await prisma.reforgerEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReforgerEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ReforgerEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReforgerEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerEventFindFirstArgs} args - Arguments to find a ReforgerEvent
     * @example
     * // Get one ReforgerEvent
     * const reforgerEvent = await prisma.reforgerEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReforgerEventFindFirstArgs>(args?: SelectSubset<T, ReforgerEventFindFirstArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReforgerEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerEventFindFirstOrThrowArgs} args - Arguments to find a ReforgerEvent
     * @example
     * // Get one ReforgerEvent
     * const reforgerEvent = await prisma.reforgerEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReforgerEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ReforgerEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReforgerEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReforgerEvents
     * const reforgerEvents = await prisma.reforgerEvent.findMany()
     * 
     * // Get first 10 ReforgerEvents
     * const reforgerEvents = await prisma.reforgerEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reforgerEventWithIdOnly = await prisma.reforgerEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReforgerEventFindManyArgs>(args?: SelectSubset<T, ReforgerEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReforgerEvent.
     * @param {ReforgerEventCreateArgs} args - Arguments to create a ReforgerEvent.
     * @example
     * // Create one ReforgerEvent
     * const ReforgerEvent = await prisma.reforgerEvent.create({
     *   data: {
     *     // ... data to create a ReforgerEvent
     *   }
     * })
     * 
     */
    create<T extends ReforgerEventCreateArgs>(args: SelectSubset<T, ReforgerEventCreateArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReforgerEvents.
     * @param {ReforgerEventCreateManyArgs} args - Arguments to create many ReforgerEvents.
     * @example
     * // Create many ReforgerEvents
     * const reforgerEvent = await prisma.reforgerEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReforgerEventCreateManyArgs>(args?: SelectSubset<T, ReforgerEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReforgerEvents and returns the data saved in the database.
     * @param {ReforgerEventCreateManyAndReturnArgs} args - Arguments to create many ReforgerEvents.
     * @example
     * // Create many ReforgerEvents
     * const reforgerEvent = await prisma.reforgerEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReforgerEvents and only return the `id`
     * const reforgerEventWithIdOnly = await prisma.reforgerEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReforgerEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ReforgerEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReforgerEvent.
     * @param {ReforgerEventDeleteArgs} args - Arguments to delete one ReforgerEvent.
     * @example
     * // Delete one ReforgerEvent
     * const ReforgerEvent = await prisma.reforgerEvent.delete({
     *   where: {
     *     // ... filter to delete one ReforgerEvent
     *   }
     * })
     * 
     */
    delete<T extends ReforgerEventDeleteArgs>(args: SelectSubset<T, ReforgerEventDeleteArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReforgerEvent.
     * @param {ReforgerEventUpdateArgs} args - Arguments to update one ReforgerEvent.
     * @example
     * // Update one ReforgerEvent
     * const reforgerEvent = await prisma.reforgerEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReforgerEventUpdateArgs>(args: SelectSubset<T, ReforgerEventUpdateArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReforgerEvents.
     * @param {ReforgerEventDeleteManyArgs} args - Arguments to filter ReforgerEvents to delete.
     * @example
     * // Delete a few ReforgerEvents
     * const { count } = await prisma.reforgerEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReforgerEventDeleteManyArgs>(args?: SelectSubset<T, ReforgerEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReforgerEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReforgerEvents
     * const reforgerEvent = await prisma.reforgerEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReforgerEventUpdateManyArgs>(args: SelectSubset<T, ReforgerEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReforgerEvents and returns the data updated in the database.
     * @param {ReforgerEventUpdateManyAndReturnArgs} args - Arguments to update many ReforgerEvents.
     * @example
     * // Update many ReforgerEvents
     * const reforgerEvent = await prisma.reforgerEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReforgerEvents and only return the `id`
     * const reforgerEventWithIdOnly = await prisma.reforgerEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReforgerEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ReforgerEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReforgerEvent.
     * @param {ReforgerEventUpsertArgs} args - Arguments to update or create a ReforgerEvent.
     * @example
     * // Update or create a ReforgerEvent
     * const reforgerEvent = await prisma.reforgerEvent.upsert({
     *   create: {
     *     // ... data to create a ReforgerEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReforgerEvent we want to update
     *   }
     * })
     */
    upsert<T extends ReforgerEventUpsertArgs>(args: SelectSubset<T, ReforgerEventUpsertArgs<ExtArgs>>): Prisma__ReforgerEventClient<$Result.GetResult<Prisma.$ReforgerEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReforgerEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerEventCountArgs} args - Arguments to filter ReforgerEvents to count.
     * @example
     * // Count the number of ReforgerEvents
     * const count = await prisma.reforgerEvent.count({
     *   where: {
     *     // ... the filter for the ReforgerEvents we want to count
     *   }
     * })
    **/
    count<T extends ReforgerEventCountArgs>(
      args?: Subset<T, ReforgerEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReforgerEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReforgerEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReforgerEventAggregateArgs>(args: Subset<T, ReforgerEventAggregateArgs>): Prisma.PrismaPromise<GetReforgerEventAggregateType<T>>

    /**
     * Group by ReforgerEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReforgerEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReforgerEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReforgerEventGroupByArgs['orderBy'] }
        : { orderBy?: ReforgerEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReforgerEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReforgerEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReforgerEvent model
   */
  readonly fields: ReforgerEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReforgerEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReforgerEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ReforgerSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReforgerSessionDefaultArgs<ExtArgs>>): Prisma__ReforgerSessionClient<$Result.GetResult<Prisma.$ReforgerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReforgerEvent model
   */
  interface ReforgerEventFieldRefs {
    readonly id: FieldRef<"ReforgerEvent", 'String'>
    readonly eventId: FieldRef<"ReforgerEvent", 'String'>
    readonly sessionDbId: FieldRef<"ReforgerEvent", 'String'>
    readonly type: FieldRef<"ReforgerEvent", 'String'>
    readonly taskId: FieldRef<"ReforgerEvent", 'String'>
    readonly oldState: FieldRef<"ReforgerEvent", 'Int'>
    readonly oldStateName: FieldRef<"ReforgerEvent", 'String'>
    readonly newState: FieldRef<"ReforgerEvent", 'Int'>
    readonly newStateName: FieldRef<"ReforgerEvent", 'String'>
    readonly eventTimestamp: FieldRef<"ReforgerEvent", 'DateTime'>
    readonly rawJson: FieldRef<"ReforgerEvent", 'Json'>
    readonly createdAt: FieldRef<"ReforgerEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReforgerEvent findUnique
   */
  export type ReforgerEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerEvent to fetch.
     */
    where: ReforgerEventWhereUniqueInput
  }

  /**
   * ReforgerEvent findUniqueOrThrow
   */
  export type ReforgerEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerEvent to fetch.
     */
    where: ReforgerEventWhereUniqueInput
  }

  /**
   * ReforgerEvent findFirst
   */
  export type ReforgerEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerEvent to fetch.
     */
    where?: ReforgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerEvents to fetch.
     */
    orderBy?: ReforgerEventOrderByWithRelationInput | ReforgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReforgerEvents.
     */
    cursor?: ReforgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReforgerEvents.
     */
    distinct?: ReforgerEventScalarFieldEnum | ReforgerEventScalarFieldEnum[]
  }

  /**
   * ReforgerEvent findFirstOrThrow
   */
  export type ReforgerEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerEvent to fetch.
     */
    where?: ReforgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerEvents to fetch.
     */
    orderBy?: ReforgerEventOrderByWithRelationInput | ReforgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReforgerEvents.
     */
    cursor?: ReforgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReforgerEvents.
     */
    distinct?: ReforgerEventScalarFieldEnum | ReforgerEventScalarFieldEnum[]
  }

  /**
   * ReforgerEvent findMany
   */
  export type ReforgerEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * Filter, which ReforgerEvents to fetch.
     */
    where?: ReforgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReforgerEvents to fetch.
     */
    orderBy?: ReforgerEventOrderByWithRelationInput | ReforgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReforgerEvents.
     */
    cursor?: ReforgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReforgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReforgerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReforgerEvents.
     */
    distinct?: ReforgerEventScalarFieldEnum | ReforgerEventScalarFieldEnum[]
  }

  /**
   * ReforgerEvent create
   */
  export type ReforgerEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ReforgerEvent.
     */
    data: XOR<ReforgerEventCreateInput, ReforgerEventUncheckedCreateInput>
  }

  /**
   * ReforgerEvent createMany
   */
  export type ReforgerEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReforgerEvents.
     */
    data: ReforgerEventCreateManyInput | ReforgerEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReforgerEvent createManyAndReturn
   */
  export type ReforgerEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * The data used to create many ReforgerEvents.
     */
    data: ReforgerEventCreateManyInput | ReforgerEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReforgerEvent update
   */
  export type ReforgerEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ReforgerEvent.
     */
    data: XOR<ReforgerEventUpdateInput, ReforgerEventUncheckedUpdateInput>
    /**
     * Choose, which ReforgerEvent to update.
     */
    where: ReforgerEventWhereUniqueInput
  }

  /**
   * ReforgerEvent updateMany
   */
  export type ReforgerEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReforgerEvents.
     */
    data: XOR<ReforgerEventUpdateManyMutationInput, ReforgerEventUncheckedUpdateManyInput>
    /**
     * Filter which ReforgerEvents to update
     */
    where?: ReforgerEventWhereInput
    /**
     * Limit how many ReforgerEvents to update.
     */
    limit?: number
  }

  /**
   * ReforgerEvent updateManyAndReturn
   */
  export type ReforgerEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * The data used to update ReforgerEvents.
     */
    data: XOR<ReforgerEventUpdateManyMutationInput, ReforgerEventUncheckedUpdateManyInput>
    /**
     * Filter which ReforgerEvents to update
     */
    where?: ReforgerEventWhereInput
    /**
     * Limit how many ReforgerEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReforgerEvent upsert
   */
  export type ReforgerEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ReforgerEvent to update in case it exists.
     */
    where: ReforgerEventWhereUniqueInput
    /**
     * In case the ReforgerEvent found by the `where` argument doesn't exist, create a new ReforgerEvent with this data.
     */
    create: XOR<ReforgerEventCreateInput, ReforgerEventUncheckedCreateInput>
    /**
     * In case the ReforgerEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReforgerEventUpdateInput, ReforgerEventUncheckedUpdateInput>
  }

  /**
   * ReforgerEvent delete
   */
  export type ReforgerEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
    /**
     * Filter which ReforgerEvent to delete.
     */
    where: ReforgerEventWhereUniqueInput
  }

  /**
   * ReforgerEvent deleteMany
   */
  export type ReforgerEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReforgerEvents to delete
     */
    where?: ReforgerEventWhereInput
    /**
     * Limit how many ReforgerEvents to delete.
     */
    limit?: number
  }

  /**
   * ReforgerEvent without action
   */
  export type ReforgerEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReforgerEvent
     */
    select?: ReforgerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReforgerEvent
     */
    omit?: ReforgerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReforgerEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReforgerSessionScalarFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    sessionId: 'sessionId',
    missionId: 'missionId',
    missionName: 'missionName',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReforgerSessionScalarFieldEnum = (typeof ReforgerSessionScalarFieldEnum)[keyof typeof ReforgerSessionScalarFieldEnum]


  export const ReforgerEventScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    sessionDbId: 'sessionDbId',
    type: 'type',
    taskId: 'taskId',
    oldState: 'oldState',
    oldStateName: 'oldStateName',
    newState: 'newState',
    newStateName: 'newStateName',
    eventTimestamp: 'eventTimestamp',
    rawJson: 'rawJson',
    createdAt: 'createdAt'
  };

  export type ReforgerEventScalarFieldEnum = (typeof ReforgerEventScalarFieldEnum)[keyof typeof ReforgerEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ReforgerSessionWhereInput = {
    AND?: ReforgerSessionWhereInput | ReforgerSessionWhereInput[]
    OR?: ReforgerSessionWhereInput[]
    NOT?: ReforgerSessionWhereInput | ReforgerSessionWhereInput[]
    id?: StringFilter<"ReforgerSession"> | string
    serverId?: StringFilter<"ReforgerSession"> | string
    sessionId?: StringFilter<"ReforgerSession"> | string
    missionId?: StringFilter<"ReforgerSession"> | string
    missionName?: StringNullableFilter<"ReforgerSession"> | string | null
    startedAt?: DateTimeNullableFilter<"ReforgerSession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"ReforgerSession"> | Date | string | null
    createdAt?: DateTimeFilter<"ReforgerSession"> | Date | string
    updatedAt?: DateTimeFilter<"ReforgerSession"> | Date | string
    events?: ReforgerEventListRelationFilter
  }

  export type ReforgerSessionOrderByWithRelationInput = {
    id?: SortOrder
    serverId?: SortOrder
    sessionId?: SortOrder
    missionId?: SortOrder
    missionName?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: ReforgerEventOrderByRelationAggregateInput
  }

  export type ReforgerSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: ReforgerSessionWhereInput | ReforgerSessionWhereInput[]
    OR?: ReforgerSessionWhereInput[]
    NOT?: ReforgerSessionWhereInput | ReforgerSessionWhereInput[]
    serverId?: StringFilter<"ReforgerSession"> | string
    missionId?: StringFilter<"ReforgerSession"> | string
    missionName?: StringNullableFilter<"ReforgerSession"> | string | null
    startedAt?: DateTimeNullableFilter<"ReforgerSession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"ReforgerSession"> | Date | string | null
    createdAt?: DateTimeFilter<"ReforgerSession"> | Date | string
    updatedAt?: DateTimeFilter<"ReforgerSession"> | Date | string
    events?: ReforgerEventListRelationFilter
  }, "id" | "sessionId">

  export type ReforgerSessionOrderByWithAggregationInput = {
    id?: SortOrder
    serverId?: SortOrder
    sessionId?: SortOrder
    missionId?: SortOrder
    missionName?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReforgerSessionCountOrderByAggregateInput
    _max?: ReforgerSessionMaxOrderByAggregateInput
    _min?: ReforgerSessionMinOrderByAggregateInput
  }

  export type ReforgerSessionScalarWhereWithAggregatesInput = {
    AND?: ReforgerSessionScalarWhereWithAggregatesInput | ReforgerSessionScalarWhereWithAggregatesInput[]
    OR?: ReforgerSessionScalarWhereWithAggregatesInput[]
    NOT?: ReforgerSessionScalarWhereWithAggregatesInput | ReforgerSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReforgerSession"> | string
    serverId?: StringWithAggregatesFilter<"ReforgerSession"> | string
    sessionId?: StringWithAggregatesFilter<"ReforgerSession"> | string
    missionId?: StringWithAggregatesFilter<"ReforgerSession"> | string
    missionName?: StringNullableWithAggregatesFilter<"ReforgerSession"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"ReforgerSession"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"ReforgerSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReforgerSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReforgerSession"> | Date | string
  }

  export type ReforgerEventWhereInput = {
    AND?: ReforgerEventWhereInput | ReforgerEventWhereInput[]
    OR?: ReforgerEventWhereInput[]
    NOT?: ReforgerEventWhereInput | ReforgerEventWhereInput[]
    id?: StringFilter<"ReforgerEvent"> | string
    eventId?: StringFilter<"ReforgerEvent"> | string
    sessionDbId?: StringFilter<"ReforgerEvent"> | string
    type?: StringFilter<"ReforgerEvent"> | string
    taskId?: StringNullableFilter<"ReforgerEvent"> | string | null
    oldState?: IntNullableFilter<"ReforgerEvent"> | number | null
    oldStateName?: StringNullableFilter<"ReforgerEvent"> | string | null
    newState?: IntNullableFilter<"ReforgerEvent"> | number | null
    newStateName?: StringNullableFilter<"ReforgerEvent"> | string | null
    eventTimestamp?: DateTimeFilter<"ReforgerEvent"> | Date | string
    rawJson?: JsonFilter<"ReforgerEvent">
    createdAt?: DateTimeFilter<"ReforgerEvent"> | Date | string
    session?: XOR<ReforgerSessionScalarRelationFilter, ReforgerSessionWhereInput>
  }

  export type ReforgerEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    sessionDbId?: SortOrder
    type?: SortOrder
    taskId?: SortOrderInput | SortOrder
    oldState?: SortOrderInput | SortOrder
    oldStateName?: SortOrderInput | SortOrder
    newState?: SortOrderInput | SortOrder
    newStateName?: SortOrderInput | SortOrder
    eventTimestamp?: SortOrder
    rawJson?: SortOrder
    createdAt?: SortOrder
    session?: ReforgerSessionOrderByWithRelationInput
  }

  export type ReforgerEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: ReforgerEventWhereInput | ReforgerEventWhereInput[]
    OR?: ReforgerEventWhereInput[]
    NOT?: ReforgerEventWhereInput | ReforgerEventWhereInput[]
    sessionDbId?: StringFilter<"ReforgerEvent"> | string
    type?: StringFilter<"ReforgerEvent"> | string
    taskId?: StringNullableFilter<"ReforgerEvent"> | string | null
    oldState?: IntNullableFilter<"ReforgerEvent"> | number | null
    oldStateName?: StringNullableFilter<"ReforgerEvent"> | string | null
    newState?: IntNullableFilter<"ReforgerEvent"> | number | null
    newStateName?: StringNullableFilter<"ReforgerEvent"> | string | null
    eventTimestamp?: DateTimeFilter<"ReforgerEvent"> | Date | string
    rawJson?: JsonFilter<"ReforgerEvent">
    createdAt?: DateTimeFilter<"ReforgerEvent"> | Date | string
    session?: XOR<ReforgerSessionScalarRelationFilter, ReforgerSessionWhereInput>
  }, "id" | "eventId">

  export type ReforgerEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    sessionDbId?: SortOrder
    type?: SortOrder
    taskId?: SortOrderInput | SortOrder
    oldState?: SortOrderInput | SortOrder
    oldStateName?: SortOrderInput | SortOrder
    newState?: SortOrderInput | SortOrder
    newStateName?: SortOrderInput | SortOrder
    eventTimestamp?: SortOrder
    rawJson?: SortOrder
    createdAt?: SortOrder
    _count?: ReforgerEventCountOrderByAggregateInput
    _avg?: ReforgerEventAvgOrderByAggregateInput
    _max?: ReforgerEventMaxOrderByAggregateInput
    _min?: ReforgerEventMinOrderByAggregateInput
    _sum?: ReforgerEventSumOrderByAggregateInput
  }

  export type ReforgerEventScalarWhereWithAggregatesInput = {
    AND?: ReforgerEventScalarWhereWithAggregatesInput | ReforgerEventScalarWhereWithAggregatesInput[]
    OR?: ReforgerEventScalarWhereWithAggregatesInput[]
    NOT?: ReforgerEventScalarWhereWithAggregatesInput | ReforgerEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReforgerEvent"> | string
    eventId?: StringWithAggregatesFilter<"ReforgerEvent"> | string
    sessionDbId?: StringWithAggregatesFilter<"ReforgerEvent"> | string
    type?: StringWithAggregatesFilter<"ReforgerEvent"> | string
    taskId?: StringNullableWithAggregatesFilter<"ReforgerEvent"> | string | null
    oldState?: IntNullableWithAggregatesFilter<"ReforgerEvent"> | number | null
    oldStateName?: StringNullableWithAggregatesFilter<"ReforgerEvent"> | string | null
    newState?: IntNullableWithAggregatesFilter<"ReforgerEvent"> | number | null
    newStateName?: StringNullableWithAggregatesFilter<"ReforgerEvent"> | string | null
    eventTimestamp?: DateTimeWithAggregatesFilter<"ReforgerEvent"> | Date | string
    rawJson?: JsonWithAggregatesFilter<"ReforgerEvent">
    createdAt?: DateTimeWithAggregatesFilter<"ReforgerEvent"> | Date | string
  }

  export type ReforgerSessionCreateInput = {
    id?: string
    serverId: string
    sessionId: string
    missionId: string
    missionName?: string | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ReforgerEventCreateNestedManyWithoutSessionInput
  }

  export type ReforgerSessionUncheckedCreateInput = {
    id?: string
    serverId: string
    sessionId: string
    missionId: string
    missionName?: string | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ReforgerEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ReforgerSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    missionName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ReforgerEventUpdateManyWithoutSessionNestedInput
  }

  export type ReforgerSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    missionName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ReforgerEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ReforgerSessionCreateManyInput = {
    id?: string
    serverId: string
    sessionId: string
    missionId: string
    missionName?: string | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReforgerSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    missionName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    missionName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerEventCreateInput = {
    id?: string
    eventId: string
    type: string
    taskId?: string | null
    oldState?: number | null
    oldStateName?: string | null
    newState?: number | null
    newStateName?: string | null
    eventTimestamp: Date | string
    rawJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    session: ReforgerSessionCreateNestedOneWithoutEventsInput
  }

  export type ReforgerEventUncheckedCreateInput = {
    id?: string
    eventId: string
    sessionDbId: string
    type: string
    taskId?: string | null
    oldState?: number | null
    oldStateName?: string | null
    newState?: number | null
    newStateName?: string | null
    eventTimestamp: Date | string
    rawJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReforgerEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    oldState?: NullableIntFieldUpdateOperationsInput | number | null
    oldStateName?: NullableStringFieldUpdateOperationsInput | string | null
    newState?: NullableIntFieldUpdateOperationsInput | number | null
    newStateName?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rawJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ReforgerSessionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ReforgerEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    sessionDbId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    oldState?: NullableIntFieldUpdateOperationsInput | number | null
    oldStateName?: NullableStringFieldUpdateOperationsInput | string | null
    newState?: NullableIntFieldUpdateOperationsInput | number | null
    newStateName?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rawJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerEventCreateManyInput = {
    id?: string
    eventId: string
    sessionDbId: string
    type: string
    taskId?: string | null
    oldState?: number | null
    oldStateName?: string | null
    newState?: number | null
    newStateName?: string | null
    eventTimestamp: Date | string
    rawJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReforgerEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    oldState?: NullableIntFieldUpdateOperationsInput | number | null
    oldStateName?: NullableStringFieldUpdateOperationsInput | string | null
    newState?: NullableIntFieldUpdateOperationsInput | number | null
    newStateName?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rawJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    sessionDbId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    oldState?: NullableIntFieldUpdateOperationsInput | number | null
    oldStateName?: NullableStringFieldUpdateOperationsInput | string | null
    newState?: NullableIntFieldUpdateOperationsInput | number | null
    newStateName?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rawJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReforgerEventListRelationFilter = {
    every?: ReforgerEventWhereInput
    some?: ReforgerEventWhereInput
    none?: ReforgerEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReforgerEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReforgerSessionCountOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    sessionId?: SortOrder
    missionId?: SortOrder
    missionName?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReforgerSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    sessionId?: SortOrder
    missionId?: SortOrder
    missionName?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReforgerSessionMinOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    sessionId?: SortOrder
    missionId?: SortOrder
    missionName?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReforgerSessionScalarRelationFilter = {
    is?: ReforgerSessionWhereInput
    isNot?: ReforgerSessionWhereInput
  }

  export type ReforgerEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    sessionDbId?: SortOrder
    type?: SortOrder
    taskId?: SortOrder
    oldState?: SortOrder
    oldStateName?: SortOrder
    newState?: SortOrder
    newStateName?: SortOrder
    eventTimestamp?: SortOrder
    rawJson?: SortOrder
    createdAt?: SortOrder
  }

  export type ReforgerEventAvgOrderByAggregateInput = {
    oldState?: SortOrder
    newState?: SortOrder
  }

  export type ReforgerEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    sessionDbId?: SortOrder
    type?: SortOrder
    taskId?: SortOrder
    oldState?: SortOrder
    oldStateName?: SortOrder
    newState?: SortOrder
    newStateName?: SortOrder
    eventTimestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ReforgerEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    sessionDbId?: SortOrder
    type?: SortOrder
    taskId?: SortOrder
    oldState?: SortOrder
    oldStateName?: SortOrder
    newState?: SortOrder
    newStateName?: SortOrder
    eventTimestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ReforgerEventSumOrderByAggregateInput = {
    oldState?: SortOrder
    newState?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ReforgerEventCreateNestedManyWithoutSessionInput = {
    create?: XOR<ReforgerEventCreateWithoutSessionInput, ReforgerEventUncheckedCreateWithoutSessionInput> | ReforgerEventCreateWithoutSessionInput[] | ReforgerEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReforgerEventCreateOrConnectWithoutSessionInput | ReforgerEventCreateOrConnectWithoutSessionInput[]
    createMany?: ReforgerEventCreateManySessionInputEnvelope
    connect?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
  }

  export type ReforgerEventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ReforgerEventCreateWithoutSessionInput, ReforgerEventUncheckedCreateWithoutSessionInput> | ReforgerEventCreateWithoutSessionInput[] | ReforgerEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReforgerEventCreateOrConnectWithoutSessionInput | ReforgerEventCreateOrConnectWithoutSessionInput[]
    createMany?: ReforgerEventCreateManySessionInputEnvelope
    connect?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReforgerEventUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ReforgerEventCreateWithoutSessionInput, ReforgerEventUncheckedCreateWithoutSessionInput> | ReforgerEventCreateWithoutSessionInput[] | ReforgerEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReforgerEventCreateOrConnectWithoutSessionInput | ReforgerEventCreateOrConnectWithoutSessionInput[]
    upsert?: ReforgerEventUpsertWithWhereUniqueWithoutSessionInput | ReforgerEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ReforgerEventCreateManySessionInputEnvelope
    set?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    disconnect?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    delete?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    connect?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    update?: ReforgerEventUpdateWithWhereUniqueWithoutSessionInput | ReforgerEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ReforgerEventUpdateManyWithWhereWithoutSessionInput | ReforgerEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ReforgerEventScalarWhereInput | ReforgerEventScalarWhereInput[]
  }

  export type ReforgerEventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ReforgerEventCreateWithoutSessionInput, ReforgerEventUncheckedCreateWithoutSessionInput> | ReforgerEventCreateWithoutSessionInput[] | ReforgerEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReforgerEventCreateOrConnectWithoutSessionInput | ReforgerEventCreateOrConnectWithoutSessionInput[]
    upsert?: ReforgerEventUpsertWithWhereUniqueWithoutSessionInput | ReforgerEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ReforgerEventCreateManySessionInputEnvelope
    set?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    disconnect?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    delete?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    connect?: ReforgerEventWhereUniqueInput | ReforgerEventWhereUniqueInput[]
    update?: ReforgerEventUpdateWithWhereUniqueWithoutSessionInput | ReforgerEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ReforgerEventUpdateManyWithWhereWithoutSessionInput | ReforgerEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ReforgerEventScalarWhereInput | ReforgerEventScalarWhereInput[]
  }

  export type ReforgerSessionCreateNestedOneWithoutEventsInput = {
    create?: XOR<ReforgerSessionCreateWithoutEventsInput, ReforgerSessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ReforgerSessionCreateOrConnectWithoutEventsInput
    connect?: ReforgerSessionWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReforgerSessionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ReforgerSessionCreateWithoutEventsInput, ReforgerSessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ReforgerSessionCreateOrConnectWithoutEventsInput
    upsert?: ReforgerSessionUpsertWithoutEventsInput
    connect?: ReforgerSessionWhereUniqueInput
    update?: XOR<XOR<ReforgerSessionUpdateToOneWithWhereWithoutEventsInput, ReforgerSessionUpdateWithoutEventsInput>, ReforgerSessionUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReforgerEventCreateWithoutSessionInput = {
    id?: string
    eventId: string
    type: string
    taskId?: string | null
    oldState?: number | null
    oldStateName?: string | null
    newState?: number | null
    newStateName?: string | null
    eventTimestamp: Date | string
    rawJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReforgerEventUncheckedCreateWithoutSessionInput = {
    id?: string
    eventId: string
    type: string
    taskId?: string | null
    oldState?: number | null
    oldStateName?: string | null
    newState?: number | null
    newStateName?: string | null
    eventTimestamp: Date | string
    rawJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReforgerEventCreateOrConnectWithoutSessionInput = {
    where: ReforgerEventWhereUniqueInput
    create: XOR<ReforgerEventCreateWithoutSessionInput, ReforgerEventUncheckedCreateWithoutSessionInput>
  }

  export type ReforgerEventCreateManySessionInputEnvelope = {
    data: ReforgerEventCreateManySessionInput | ReforgerEventCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type ReforgerEventUpsertWithWhereUniqueWithoutSessionInput = {
    where: ReforgerEventWhereUniqueInput
    update: XOR<ReforgerEventUpdateWithoutSessionInput, ReforgerEventUncheckedUpdateWithoutSessionInput>
    create: XOR<ReforgerEventCreateWithoutSessionInput, ReforgerEventUncheckedCreateWithoutSessionInput>
  }

  export type ReforgerEventUpdateWithWhereUniqueWithoutSessionInput = {
    where: ReforgerEventWhereUniqueInput
    data: XOR<ReforgerEventUpdateWithoutSessionInput, ReforgerEventUncheckedUpdateWithoutSessionInput>
  }

  export type ReforgerEventUpdateManyWithWhereWithoutSessionInput = {
    where: ReforgerEventScalarWhereInput
    data: XOR<ReforgerEventUpdateManyMutationInput, ReforgerEventUncheckedUpdateManyWithoutSessionInput>
  }

  export type ReforgerEventScalarWhereInput = {
    AND?: ReforgerEventScalarWhereInput | ReforgerEventScalarWhereInput[]
    OR?: ReforgerEventScalarWhereInput[]
    NOT?: ReforgerEventScalarWhereInput | ReforgerEventScalarWhereInput[]
    id?: StringFilter<"ReforgerEvent"> | string
    eventId?: StringFilter<"ReforgerEvent"> | string
    sessionDbId?: StringFilter<"ReforgerEvent"> | string
    type?: StringFilter<"ReforgerEvent"> | string
    taskId?: StringNullableFilter<"ReforgerEvent"> | string | null
    oldState?: IntNullableFilter<"ReforgerEvent"> | number | null
    oldStateName?: StringNullableFilter<"ReforgerEvent"> | string | null
    newState?: IntNullableFilter<"ReforgerEvent"> | number | null
    newStateName?: StringNullableFilter<"ReforgerEvent"> | string | null
    eventTimestamp?: DateTimeFilter<"ReforgerEvent"> | Date | string
    rawJson?: JsonFilter<"ReforgerEvent">
    createdAt?: DateTimeFilter<"ReforgerEvent"> | Date | string
  }

  export type ReforgerSessionCreateWithoutEventsInput = {
    id?: string
    serverId: string
    sessionId: string
    missionId: string
    missionName?: string | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReforgerSessionUncheckedCreateWithoutEventsInput = {
    id?: string
    serverId: string
    sessionId: string
    missionId: string
    missionName?: string | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReforgerSessionCreateOrConnectWithoutEventsInput = {
    where: ReforgerSessionWhereUniqueInput
    create: XOR<ReforgerSessionCreateWithoutEventsInput, ReforgerSessionUncheckedCreateWithoutEventsInput>
  }

  export type ReforgerSessionUpsertWithoutEventsInput = {
    update: XOR<ReforgerSessionUpdateWithoutEventsInput, ReforgerSessionUncheckedUpdateWithoutEventsInput>
    create: XOR<ReforgerSessionCreateWithoutEventsInput, ReforgerSessionUncheckedCreateWithoutEventsInput>
    where?: ReforgerSessionWhereInput
  }

  export type ReforgerSessionUpdateToOneWithWhereWithoutEventsInput = {
    where?: ReforgerSessionWhereInput
    data: XOR<ReforgerSessionUpdateWithoutEventsInput, ReforgerSessionUncheckedUpdateWithoutEventsInput>
  }

  export type ReforgerSessionUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    missionName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerSessionUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    missionName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerEventCreateManySessionInput = {
    id?: string
    eventId: string
    type: string
    taskId?: string | null
    oldState?: number | null
    oldStateName?: string | null
    newState?: number | null
    newStateName?: string | null
    eventTimestamp: Date | string
    rawJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReforgerEventUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    oldState?: NullableIntFieldUpdateOperationsInput | number | null
    oldStateName?: NullableStringFieldUpdateOperationsInput | string | null
    newState?: NullableIntFieldUpdateOperationsInput | number | null
    newStateName?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rawJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerEventUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    oldState?: NullableIntFieldUpdateOperationsInput | number | null
    oldStateName?: NullableStringFieldUpdateOperationsInput | string | null
    newState?: NullableIntFieldUpdateOperationsInput | number | null
    newStateName?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rawJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReforgerEventUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    oldState?: NullableIntFieldUpdateOperationsInput | number | null
    oldStateName?: NullableStringFieldUpdateOperationsInput | string | null
    newState?: NullableIntFieldUpdateOperationsInput | number | null
    newStateName?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rawJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}