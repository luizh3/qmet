import ElementBuilder from "./builder/ElementsBuilder";
import NodeTypeVisitor from "./visitor/NodeTypeVisitor";
import Transverse from "./transverse/Transverse";
import { Visitor } from "./visitor/Visitor";

const Parser = require('tree-sitter');
const QMetLanguage = require('tree-sitter-qmet');

export default class TemplateEngine {

    private parser: any;
    private transverse: Transverse;
    private visitor: Visitor;
    private builder: ElementBuilder;

    constructor() {
        this.builder = new ElementBuilder();
        this.visitor = new NodeTypeVisitor(this.builder);
        this.transverse = new Transverse();

        this.parser = new Parser();
        this.parser.setLanguage(QMetLanguage);
    }


    handle(query: string): string | undefined {

        const node = this.parser.parse(query).rootNode;

        this.transverse.postOrder(node, this.visitor)

        const result = this.builder.build();

        return result;

    }


}