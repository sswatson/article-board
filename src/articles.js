
const lines = `The RKGMS
Documentation for the RAI Relational Knowledge Graph Management System.
Why the RKGMS?
Learn the benefits of using RelationalAIs Relational Knowledge Graph Management System.
RelationalAI SDK Configuration
This guide presents the configuration of the RelationalAI SDK, used to interact with the Relational Knowledge Graph Management System (RKGMS).
RelationalAI SDK for Julia
This guide presents the API for the RelationalAI SDK for Julia.
RelationalAI SDK Guides
(empty)
RelationalAI SDK for Python
This guide presents the API for the RelationalAI SDK for Python.
Using the Python SDK through Visual Studio Code
A guide to setting up a VSCode Environment for use with Python and RAI Cloud
RelationalAI SDK for Java
This guide presents the API for the RelationalAI SDK for Java.
Working with Queries in the RAI Console
Covers running queries in the RAI Console, including using the Query Editor to update base relations.
The RAI Console
A set of guides explaining how to use the RAI Console.
Managing Users and OAuth Clients in the RAI Console
Covers managing users and OAuth clients in the RAI Console.
Working with Data in the RAI Console
Covers importing, deleting and processing base relation data in the RAI Console.
Working with RAI Notebooks
A short guide to working with RelationalAI notebooks. It covers creating, deleting, exporting, and importing notebooks as well as the four different cell types and how to add, delete, and hide them.
Working with Models in the RAI Console
Covers creating, deleting, editing, exporting, and importing models in the RAI Console.
Navigating the RAI Console
This short guide outlines areas of the Console, controls, and navigation model.
Managing Databases in the RAI Console
Covers using, adding, and cloning databases using the RAI Console, along with the relationship between databases and notebooks.
Managing Engines in the RAI Console
Covers choosing, creating, and deleting engines using the RAI Console, along with the relationship between engines and databases.
Rel Primer: Advanced Syntax
More advanced syntax for Rel.
Rel Primer Overview
Rel Primer Overview
Rel Primer: Aggregations, Group-by, and Joins
Explaining Aggregations, Group-by, and Joins in Rel
Rel Primer: Basic Syntax
An introduction to the basic syntax of Rel.
Rel Language Reference
Reference Guide for the Rel language.
References
Reference material for the Rel language.
Rel Data Types
This reference guide describes the various data types in Rel.
Rel Integrity Constraints Reference
Reference Guide for Rel Integrity Constraints.
Rel Libraries
Our collection of Rel libraries.
The Machine Learning Library (ml)
Machine learning bindings for mlpack, GLM, XGboost.
The Intrinsic Library (intrinsics)
Collection of intrinsic Rel definitions.
The Standard Library (stdlib)
Broad collection of Rel relations that perform essential and commonly used tasks.
The Vega Visualization Library (vega)
The Vega Visualization Library
The Vega-Lite Visualization Library (vega-lite)
Vega-Lite Visualization Library
The Math Optimization Library (mathopt)
Collection of math optimization tools.
The Algebra Library (alglib)
Collection of algebraic operations.
The Visualization Library (display)
Visualization tools including text, table, and figures. See also: the vega and vegalite libraries.
The Histogram Library (histogram)
Definitions of relations for creating histograms in Rel.
Rel Keywords and Symbols
Tables of keywords and other lexical symbols for the Rel language.
The Rel Language
Full documentation for the Rel language.
Data I/O: JSON Import and Export
This how-to guide demonstrates how to import and export JSON data using Rel.
How-To Guides
A set of how-to guides demonstrating how to use Rel to solve concrete problems.
Modeling and Reasoning: The Lehigh University Benchmark
This how-to guide demonstrates how to express reasoning using the Lehigh University Benchmark (LUBM).
Data I/O: Supported Data Files
This guide elaborates on the supported data file types.
Data I/O: CSV Export
This how-to guide demonstrates how to export data to a CSV file using Rel.
Data I/O: CSV Import
This how-to guide demonstrates how to import data from a CSV file using Rel.
Data Visualization: Graphviz
This how-to guide demonstrates how to create graphical representations of data with Rel and Graphviz.
Data Visualization: Vega-Lite
This how-to guide demonstrates how to create graphical representations of data with Rel and Vega-Lite.
Data Visualization: Vega-Lite Gallery
This is a companion to the Data Visualization (Vega-Lite) how-to guide. This guide provides a gallery of examples.
Data I/O: Accessing the Cloud
This guide demonstrates how to interact with data using the supported cloud providers.
Machine Learning: Regression
This how-to guide demonstrates how to load a dataset, build regression models using glm and mlpack bindings, and perform predictions using these models.
Machine Learning: Classification
This how-to guide demonstrates how to load a dataset, build a classification model, and perform predictions using that model.
Rel Concepts
A set of concept guides explaining key aspects of the Rel language.
Entities
This concept guide introduces entities in Rel.
Modules
concept Guide for Modules in Rel.
Recursion
This concept guide demonstrates how to write and successfully use recursive relations.
Integrity Constraints
This concept guide covers integrity constraints in Rel.
Value Types
concept Guide for Value Types in Rel.
Relational Data Modeling
Learn how to use relations to model data.
Installing Models
This concept guide introduces installed Rel models, which can be reused later in queries or as building blocks for other models.
Data modeling: Graph Normal Form
This concept guide explains how to work with data in Graph Normal Form.
Updating Data: Working with Base Relations
This concept guide describes how to save and update data in a RAI relational database using the Rel language.
Getting Started
A first look at the Rel language and the RAI Relational Knowledge Graph Management System.
Quick Start
A quick start to the RKGMS using the RAI Console.
Documentation Walkthrough
Where to begin when working through the RAI documentation.
My First Knowledge Graph
This tutorial is designed to give users their first introduction to the concept of a knowledge graph.
Rel Language
A gentle introduction to Rel.
My First Rel Program
This tutorial is designed to give users their first introduction to RAIs declarative language, Rel`.split("\n");


export default function articles() {
	let result = [];
	for (let k = 0; k <= lines.length - 1; k += 2) {
		result.push({
			title: lines[k],
			description: lines[k + 1],
		})
	}
	return result;
}