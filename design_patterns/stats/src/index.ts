import { MatchResults } from "./MatchResult";
import {MatchReader} from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";

const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader);
matchReader.load();

