
import articles from './articles';

const board = [{"id":1,"name":"ARTICLES","items":[{"id":"The RKGMS","name":"The RKGMS","description":"Documentation for the RAI Relational Knowledge Graph Management System."},{"id":"Why the RKGMS?","name":"Why the RKGMS?","description":"Learn the benefits of using RelationalAIs Relational Knowledge Graph Management System."},{"id":"Working with Queries in the RAI Console","name":"Working with Queries in the RAI Console","description":"Covers running queries in the RAI Console, including using the Query Editor to update base relations."},{"id":"The RAI Console","name":"The RAI Console","description":"A set of guides explaining how to use the RAI Console."},{"id":"Working with Data in the RAI Console","name":"Working with Data in the RAI Console","description":"Covers importing, deleting and processing base relation data in the RAI Console."},{"id":"Working with RAI Notebooks","name":"Working with RAI Notebooks","description":"A short guide to working with RelationalAI notebooks. It covers creating, deleting, exporting, and importing notebooks as well as the four different cell types and how to add, delete, and hide them."},{"id":"Working with Models in the RAI Console","name":"Working with Models in the RAI Console","description":"Covers creating, deleting, editing, exporting, and importing models in the RAI Console."},{"id":"Navigating the RAI Console","name":"Navigating the RAI Console","description":"This short guide outlines areas of the Console, controls, and navigation model."},{"id":"Managing Databases in the RAI Console","name":"Managing Databases in the RAI Console","description":"Covers using, adding, and cloning databases using the RAI Console, along with the relationship between databases and notebooks."},{"id":"Managing Engines in the RAI Console","name":"Managing Engines in the RAI Console","description":"Covers choosing, creating, and deleting engines using the RAI Console, along with the relationship between engines and databases."},{"id":"Rel Primer: Advanced Syntax","name":"Rel Primer: Advanced Syntax","description":"More advanced syntax for Rel."},{"id":"Rel Primer Overview","name":"Rel Primer Overview","description":"Rel Primer Overview"},{"id":"Rel Primer: Aggregations, Group-by, and Joins","name":"Rel Primer: Aggregations, Group-by, and Joins","description":"Explaining Aggregations, Group-by, and Joins in Rel"},{"id":"Rel Primer: Basic Syntax","name":"Rel Primer: Basic Syntax","description":"An introduction to the basic syntax of Rel."},{"id":"Rel Language Reference","name":"Rel Language Reference","description":"Reference Guide for the Rel language."},{"id":"References","name":"References","description":"Reference material for the Rel language."},{"id":"Rel Data Types","name":"Rel Data Types","description":"This reference guide describes the various data types in Rel."},{"id":"Rel Integrity Constraints Reference","name":"Rel Integrity Constraints Reference","description":"Reference Guide for Rel Integrity Constraints."},{"id":"Rel Libraries","name":"Rel Libraries","description":"Our collection of Rel libraries."},{"id":"The Machine Learning Library (ml)","name":"The Machine Learning Library (ml)","description":"Machine learning bindings for mlpack, GLM, XGboost."},{"id":"The Intrinsic Library (intrinsics)","name":"The Intrinsic Library (intrinsics)","description":"Collection of intrinsic Rel definitions."},{"id":"The Standard Library (stdlib)","name":"The Standard Library (stdlib)","description":"Broad collection of Rel relations that perform essential and commonly used tasks."},{"id":"The Vega Visualization Library (vega)","name":"The Vega Visualization Library (vega)","description":"The Vega Visualization Library"},{"id":"The Vega-Lite Visualization Library (vega-lite)","name":"The Vega-Lite Visualization Library (vega-lite)","description":"Vega-Lite Visualization Library"},{"id":"The Math Optimization Library (mathopt)","name":"The Math Optimization Library (mathopt)","description":"Collection of math optimization tools."},{"id":"The Algebra Library (alglib)","name":"The Algebra Library (alglib)","description":"Collection of algebraic operations."},{"id":"The Visualization Library (display)","name":"The Visualization Library (display)","description":"Visualization tools including text, table, and figures. See also: the vega and vegalite libraries."},{"id":"The Histogram Library (histogram)","name":"The Histogram Library (histogram)","description":"Definitions of relations for creating histograms in Rel."},{"id":"Rel Keywords and Symbols","name":"Rel Keywords and Symbols","description":"Tables of keywords and other lexical symbols for the Rel language."},{"id":"The Rel Language","name":"The Rel Language","description":"Full documentation for the Rel language."},{"id":"Data I/O: JSON Import and Export","name":"Data I/O: JSON Import and Export","description":"This how-to guide demonstrates how to import and export JSON data using Rel."},{"id":"How-To Guides","name":"How-To Guides","description":"A set of how-to guides demonstrating how to use Rel to solve concrete problems."},{"id":"Modeling and Reasoning: The Lehigh University Benchmark","name":"Modeling and Reasoning: The Lehigh University Benchmark","description":"This how-to guide demonstrates how to express reasoning using the Lehigh University Benchmark (LUBM)."},{"id":"Data I/O: Supported Data Files","name":"Data I/O: Supported Data Files","description":"This guide elaborates on the supported data file types."},{"id":"Data I/O: CSV Export","name":"Data I/O: CSV Export","description":"This how-to guide demonstrates how to export data to a CSV file using Rel."},{"id":"Data I/O: CSV Import","name":"Data I/O: CSV Import","description":"This how-to guide demonstrates how to import data from a CSV file using Rel."},{"id":"Data Visualization: Graphviz","name":"Data Visualization: Graphviz","description":"This how-to guide demonstrates how to create graphical representations of data with Rel and Graphviz."},{"id":"Data Visualization: Vega-Lite","name":"Data Visualization: Vega-Lite","description":"This how-to guide demonstrates how to create graphical representations of data with Rel and Vega-Lite."},{"id":"Data Visualization: Vega-Lite Gallery","name":"Data Visualization: Vega-Lite Gallery","description":"This is a companion to the Data Visualization (Vega-Lite) how-to guide. This guide provides a gallery of examples."},{"id":"Data I/O: Accessing the Cloud","name":"Data I/O: Accessing the Cloud","description":"This guide demonstrates how to interact with data using the supported cloud providers."},{"id":"Machine Learning: Regression","name":"Machine Learning: Regression","description":"This how-to guide demonstrates how to load a dataset, build regression models using glm and mlpack bindings, and perform predictions using these models."},{"id":"Machine Learning: Classification","name":"Machine Learning: Classification","description":"This how-to guide demonstrates how to load a dataset, build a classification model, and perform predictions using that model."},{"id":"Rel Concepts","name":"Rel Concepts","description":"A set of concept guides explaining key aspects of the Rel language."},{"id":"Entities","name":"Entities","description":"This concept guide introduces entities in Rel."},{"id":"Modules","name":"Modules","description":"concept Guide for Modules in Rel."},{"id":"Recursion","name":"Recursion","description":"This concept guide demonstrates how to write and successfully use recursive relations."},{"id":"Integrity Constraints","name":"Integrity Constraints","description":"This concept guide covers integrity constraints in Rel."},{"id":"Value Types","name":"Value Types","description":"concept Guide for Value Types in Rel."},{"id":"Relational Data Modeling","name":"Relational Data Modeling","description":"Learn how to use relations to model data."},{"id":"Installing Models","name":"Installing Models","description":"This concept guide introduces installed Rel models, which can be reused later in queries or as building blocks for other models."},{"id":"Data modeling: Graph Normal Form","name":"Data modeling: Graph Normal Form","description":"This concept guide explains how to work with data in Graph Normal Form."},{"id":"Updating Data: Working with Base Relations","name":"Updating Data: Working with Base Relations","description":"This concept guide describes how to save and update data in a RAI relational database using the Rel language."},{"id":"Getting Started","name":"Getting Started","description":"A first look at the Rel language and the RAI Relational Knowledge Graph Management System."},{"id":"Quick Start","name":"Quick Start","description":"A quick start to the RKGMS using the RAI Console."},{"id":"Documentation Walkthrough","name":"Documentation Walkthrough","description":"Where to begin when working through the RAI documentation."},{"id":"My First Knowledge Graph","name":"My First Knowledge Graph","description":"This tutorial is designed to give users their first introduction to the concept of a knowledge graph."},{"id":"Rel Language","name":"Rel Language","description":"A gentle introduction to Rel."},{"id":"My First Rel Program","name":"My First Rel Program","description":"This tutorial is designed to give users their first introduction to RAIs declarative language, Rel"}]},{"id":2,"name":"SDKs","items":[{"id":"RelationalAI SDK Guides","name":"RelationalAI SDK Guides","description":"(empty)"},{"id":"Managing Users and OAuth Clients in the RAI Console","name":"Managing Users and OAuth Clients in the RAI Console","description":"Covers managing users and OAuth clients in the RAI Console."},{"id":"RelationalAI SDK Configuration","name":"RelationalAI SDK Configuration","description":"This guide presents the configuration of the RelationalAI SDK, used to interact with the Relational Knowledge Graph Management System (RKGMS)."},{"id":"RelationalAI SDK for Python","name":"RelationalAI SDK for Python","description":"This guide presents the API for the RelationalAI SDK for Python."},{"id":"RelationalAI SDK for Java","name":"RelationalAI SDK for Java","description":"This guide presents the API for the RelationalAI SDK for Java."},{"id":"Using the Python SDK through Visual Studio Code","name":"Using the Python SDK through Visual Studio Code","description":"A guide to setting up a VSCode Environment for use with Python and RAI Cloud"},{"id":"RelationalAI SDK for Julia","name":"RelationalAI SDK for Julia","description":"This guide presents the API for the RelationalAI SDK for Julia."}]}];

export default board;

let oneColumnBoard = [
	{
		id: 1,
		name: "ARTICLES",
		items: articles().map(a => {
			return {
				id: a.title,
				name: a.title,
				description: a.description,
			}
		})
	}
];