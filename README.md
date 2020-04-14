# Quasar Todo App Tutorial
## Vue.js/Quasar Basics 
### What is Quasar and Vue.js
* Quasar is a framework that sits on top of Vue,js 
* Quasar has a huge library of components 
* Vue.js is a frontend javascript framework

### Data and Methods  
* All the properties found in the *data* object get added to Vue’s reactivity system when a Vue instance is created 
* The view *reacts* when the values of the properties change 
* Properties in data are only *reactive* if they existed when the instance was created 
* `Object.freeeze()` prevents existing properties from being changed, reactivity system can’t *track* changes
* In addition to *data* properties Vue instances also expose instance *properties* and *methods*, prefixed with `$`

### Computed Properties 
* Any complex login should use a *computed property*
* `{{ message.split('').reverse().join('') }}`

### Components 
*  Breakdown Vue components into child components 
* Such as a list item and its properties along with delete button can be a child component and called/imported when displaying a list 
* Use props to pass data from parent components to child components 

### Directives  
* Special attributes with the `v-` prefix
* Directive attribute values are expected to be a single JS expression (with the exception of `v-for`
* Directives job is to reactively apply side effects to the DOM when the value of its expression changes
* `<p v-if="seen">Now you see me</p>`
* `v-if` directive determines in the `<p>` element is removed/insert based on the value of the expression
	
### Data Binding   
* Using directives to bind data properties to elements 
* Such as using v-model to bind a data properties to an input element

### Events 
### Filters 
### Lists 

### Lifecycle Hooks  
* Lifecycle hooks allow users to add code at specific stages 
* Each Vue instance goes through a series in initialization steps when it’s created
* created, mounted, updated, destroyed
* All lifecycle hooks are called with their `this` context pointing to the Vue instance invoking it
	

## Initial Setup
* Pages (Routes)
	* Create Settings and Todo pages 
	* Add routes/paths to new pages in Routes.js
* Navigation 
	* Set up navigation links in the quasar drawer component 
	* Add quasar footer and route-tab components to Todo list page to display navigation links 
	* Use data binding to populate navigation links from data properties both in the footer(for mobile) and drawer (for desktop)
	* Use breakpoint property to show/hide drawer based on window width and use css @media query to do the same for the footer
* Layout 
	* Create todo list layout using quasar list and item components 
	* Use data binding to populate list items and display todo name/status/date/time 
	* Uset quasar item/section components to arrange todo properties
	* Add quasar css classes to arrange header/footer/drawer text and style

* Style/Theme
	* Edit header and footer layout using the layout builder 
	* 
	* Edit Quasar theme using quasar theme builder 

## Vuex - State-management 
###What Is It?
* Vuex is a State management pattern + library for Vue.js
* Store data in one centralized place 
* Components can access the data from the store using getters 
* Components can change data in the store by triggering action and mutations that are contained in the store
* When data is changed in the store all components using that data are updated 

###Todo app breakdown 
* Todo Page (Vuex Store)
	* Tasks Todo (Component)
		*  Task (Component)
			*  	Edit (Component)
			*  	Delete (Component)
	* Tasks Completed (Component)
		* Task (Component)
			* Edit (Component)
			* Delete (Component)
* Using Vuex store allows components to retrieve data using getters and when the data gets modified any components using that data get updated with the change
* This is a much better approach than using events which can get hard to manage when several components are involved
* 
	
























