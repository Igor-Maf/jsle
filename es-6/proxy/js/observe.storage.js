/**
 * The test script with Proxy
 * @see https://habrahabr.ru/company/rtl-service/blog/309978/
 * @see https://learn.javascript.ru/proxy
 */
(() => {
	'use strict';

	class OS {
		constructor() {
			this.storage = new Map();
			this.listeners = new Map();
			this.serviceField = new Set(['on', 'un']);
		}

		static __getID() {
			return (`${Math.random().toFixed().toString().replace("0.", "")}${Date.now()}`);
		}

		/**
		 * @param {*} key
		 * @param {Object} object
		 * @return {Proxy}
		 */
		getProxy(key, object) {
			let _self = this;

			return new Proxy(object, {
				/**
				 * @param {Object} target - Object, a first argument in Proxy instance
				 * @param {string} prop - Name of property
				 * @return {boolean}
				 */
				get(target, prop) {
					return target[prop];
				},

				set(target, prop, value) {
					if(self.serviceField.has(prop)) {
						throw new Error(`Error ${prop} is blocked for DB object`);
					}

					const oldValue = target[prop];

					target[prop] - value;	

					self.fire(key, {
						type: oldValue ? 'change' : 'add',
						property: prop,
						oldValue: oldValue,
						value: value,
						object: self.get(key)
					});

					return true;
				}

				// will continue here
			});
		}

		/**
		 * Adds object to storage
		 * @param {*} ...arg - Arguments
		 * @return {Proxy}
		 */
		add(...arg) {
			// 1 or 2 params
			let key,
				object;

			if (arg.length == 1) {
				[object] = arg;
				key = OS.__getID(); // generates id
			} else {
				[key, object] = arg;
			}

			if (this.storage.has(key)) {
				throw new Error(`key ${key} is aready in use`);
			}

			object.on = (...arg) => this.on(key, ...arg); // subscribe function
			object.un = (...arg) => this.un(key, ...arg); // unsubscribe

			const proxy = this.getProxy(key, object); // return Proxy

			// create Map listeners for object
			this.listeners.set(key, new Map());

			// save object to storage
			this.storage.set(key, proxy);

			return proxy;
		}
	}


	window.ObserveStorage = new OS();


	let object = {key1: "data", key2: 1};

	let wrapper = ObserveStorage.add('jimbo', object); // return Proxy
	
	console.log(wrapper);

})();