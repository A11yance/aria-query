/**
 * @flow
 */

 import iteratorProxy from './iteratorProxy';

 export default function iterationDecorator<T>(collection: T, entries: Array<*>): T {
   if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
     Object.defineProperty(collection, Symbol.iterator, {
       value: iteratorProxy.bind(entries),
     });
   }
 
   return collection;
 }