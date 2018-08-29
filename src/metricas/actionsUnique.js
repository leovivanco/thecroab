setTimeout(function () {
	var t = setInterval(function () {
		if (window.jQuery != undefined) {
			clearInterval(t);
			clearTimeout(timeout);

			var metrics = (function() {
				var inherit = function(child, parent) {
					child.prototype = Object.create(parent.prototype);
				};
				function BaseMetrics() {}
				BaseMetrics.prototype.log = function(attribute) {
					console.log('Action ' + this.actionName + ' com attributo "' + attribute + '" foi registrada');
				};
				function VisitorMetrics(testName, actionName, shouldLog) {
					this.testName = testName;
					this.actionName = actionName;
					this.shouldLog = shouldLog || false;
				}
				inherit(VisitorMetrics, BaseMetrics);
				VisitorMetrics.prototype.fire = function(attribute) {
					attribute = attribute || '';
					this.shouldLog && this.log(attribute);
					mmsystem.SendUniqueAttribute(this.testName, this.actionName, 1, attribute);
				};
				function ClickMetrics(actionName, shouldLog) {
					this.actionName = actionName;
					this.shouldLog = shouldLog || false;
				}
				inherit(ClickMetrics, BaseMetrics);
				ClickMetrics.prototype.fire = function(attribute, type) {
					attribute = attribute || '';
					var actionType = type === 'postpone' ? 'postpone' : 'send';
					this.shouldLog && this.log(attribute);
					actions[actionType](this.actionName, 1, attribute);
				};
				return {
					visitor: VisitorMetrics,
					click: ClickMetrics
				};
			})();

			var testName = 'NomeDoTeste';
			var shouldLog = true; // true ou false para definir console.log
			var trigger = {
				clickUniq: new metrics.visitor(testName, 'NomeAction', shouldLog), // Clique unique
				clickCount: new metrics.click('NomeAction', shouldLog) // Clique count
			};

			// Exemplo de uso
			jQuery( 'classe' ).on('click', function () {
				trigger.clickUniq.fire('atributo'); // Para métrica de clique unique
				trigger.clickCount.fire('atributo','postpone'); // Para métrica de clica count
			});
		}
	},50);
	var timeout = setTimeout(function () {
		clearInterval(t);
	},9000);
},3000);
