"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var axios_1 = __importDefault(require("axios"));
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: '.env.local' });
console.log('ENV:', !!process.env.GITHUB_USERNAME, !!process.env.GITHUB_TOKEN);
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === 'production'
        ? 'https://your-deployed-app.com'
        : ['http://localhost:3000', 'http://localhost:5001'],
    credentials: false,
}));
app.use(express_1.default.json());
var GITHUB_API_BASE = 'https://api.github.com';
var token = process.env.GITHUB_TOKEN;
var username = process.env.GITHUB_USERNAME;
if (!token || !username) {
    throw new Error('Missing GITHUB_TOKEN or GITHUB_USERNAME in .env.local');
}
var api = axios_1.default.create({
    baseURL: GITHUB_API_BASE,
    headers: {
        Authorization: "Bearer ".concat(token),
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'PricePilot-App',
    },
});
app.get('/api/github/profile', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.get("/users/".concat(username))];
            case 1:
                response = _b.sent();
                res.json(response.data);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error('Error fetching user profile:', error_1);
                res.status(((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/api/github/repos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.get("/users/".concat(username, "/repos"), {
                        params: {
                            per_page: 100,
                            sort: 'updated',
                            type: 'owner',
                        },
                    })];
            case 1:
                response = _b.sent();
                res.json(response.data);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error('Error fetching repositories:', error_2);
                res.status(((_a = error_2.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/api/github/repos/:repoName/commit-activity', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var repoName, response, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                repoName = req.params.repoName;
                return [4 /*yield*/, api.get("/repos/".concat(username, "/").concat(repoName, "/stats/commit_activity"))];
            case 1:
                response = _b.sent();
                res.json(response.data || []);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(((_a = error_3.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/api/github/repos/:repoName/contributors', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var repoName, response, error_4;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                repoName = req.params.repoName;
                return [4 /*yield*/, api.get("/repos/".concat(username, "/").concat(repoName, "/stats/contributors"))];
            case 1:
                response = _b.sent();
                res.json(response.data || []);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                res.status(((_a = error_4.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/api/github/languages', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reposResponse, repos, languageStats_1, _i, repos_1, repo, response, languages, error_5, error_6;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 9, , 10]);
                return [4 /*yield*/, api.get("/users/".concat(username, "/repos"), {
                        params: { per_page: 100, sort: 'updated', type: 'owner' },
                    })];
            case 1:
                reposResponse = _b.sent();
                repos = reposResponse.data;
                languageStats_1 = {};
                _i = 0, repos_1 = repos;
                _b.label = 2;
            case 2:
                if (!(_i < repos_1.length)) return [3 /*break*/, 8];
                repo = repos_1[_i];
                _b.label = 3;
            case 3:
                _b.trys.push([3, 6, , 7]);
                return [4 /*yield*/, api.get("/repos/".concat(username, "/").concat(repo.name, "/languages"))];
            case 4:
                response = _b.sent();
                languages = response.data;
                Object.entries(languages).forEach(function (_a) {
                    var language = _a[0], bytes = _a[1];
                    languageStats_1[language] =
                        (languageStats_1[language] || 0) + bytes;
                });
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
            case 5:
                _b.sent();
                return [3 /*break*/, 7];
            case 6:
                error_5 = _b.sent();
                console.error("Error fetching languages for ".concat(repo.name, ":"), error_5);
                return [3 /*break*/, 7];
            case 7:
                _i++;
                return [3 /*break*/, 2];
            case 8:
                res.json(languageStats_1);
                return [3 /*break*/, 10];
            case 9:
                error_6 = _b.sent();
                console.error('Error fetching language stats:', error_6);
                res.status(((_a = error_6.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error_6.message });
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
app.get('/api/github/commits/recent', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var days, since, allCommits, page, perPage, response, commits, error_7;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                days = Number(req.query.days) || 30;
                since = new Date();
                since.setDate(since.getDate() - days);
                allCommits = [];
                page = 1;
                perPage = 100;
                _b.label = 1;
            case 1:
                if (!(page <= 10)) return [3 /*break*/, 4];
                return [4 /*yield*/, api.get('/search/commits', {
                        params: {
                            q: "author:".concat(username, " committer-date:>").concat(since
                                .toISOString()
                                .split('T')[0]),
                            sort: 'committer-date',
                            order: 'desc',
                            per_page: perPage,
                            page: page,
                        },
                        headers: { Accept: 'application/vnd.github.cloak-preview+json' },
                    })];
            case 2:
                response = _b.sent();
                commits = response.data.items;
                if (!commits || commits.length === 0)
                    return [3 /*break*/, 4];
                allCommits = __spreadArray(__spreadArray([], allCommits, true), commits, true);
                if (commits.length < perPage)
                    return [3 /*break*/, 4];
                page++;
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
            case 3:
                _b.sent();
                return [3 /*break*/, 1];
            case 4:
                console.log("Fetched ".concat(allCommits.length, " commits for last ").concat(days, " days"));
                res.json(allCommits);
                return [3 /*break*/, 6];
            case 5:
                error_7 = _b.sent();
                console.error('Error fetching recent commits:', error_7);
                res.status(((_a = error_7.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error_7.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.get('/api/github/commits/year/:year', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var year, startDate, endDate, allCommits, page, perPage, response, commits, error_8;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                year = req.params.year;
                startDate = "".concat(year, "-01-01");
                endDate = "".concat(year, "-12-31");
                allCommits = [];
                page = 1;
                perPage = 100;
                _b.label = 1;
            case 1:
                if (!(page <= 10)) return [3 /*break*/, 4];
                return [4 /*yield*/, api.get('/search/commits', {
                        params: {
                            q: "author:".concat(username, " committer-date:").concat(startDate, "..").concat(endDate),
                            sort: 'committer-date',
                            order: 'desc',
                            per_page: perPage,
                            page: page,
                        },
                        headers: { Accept: 'application/vnd.github.cloak-preview+json' },
                    })];
            case 2:
                response = _b.sent();
                commits = response.data.items;
                if (!commits || commits.length === 0)
                    return [3 /*break*/, 4];
                allCommits = __spreadArray(__spreadArray([], allCommits, true), commits, true);
                if (commits.length < perPage)
                    return [3 /*break*/, 4];
                page++;
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
            case 3:
                _b.sent();
                return [3 /*break*/, 1];
            case 4:
                console.log("Fetched ".concat(allCommits.length, " commits for year ").concat(year));
                res.json(allCommits);
                return [3 /*break*/, 6];
            case 5:
                error_8 = _b.sent();
                res.status(((_a = error_8.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: error_8.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.get('/api/github/commits/range', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, startDate, endDate, allCommits, page, perPage, response, commits, error_9;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 6]);
                _a = req.query, startDate = _a.startDate, endDate = _a.endDate;
                if (!startDate || !endDate) {
                    return [2 /*return*/, res.status(400).json({ error: 'startDate and endDate are required' })];
                }
                allCommits = [];
                page = 1;
                perPage = 100;
                _c.label = 1;
            case 1:
                if (!(page <= 10)) return [3 /*break*/, 4];
                return [4 /*yield*/, api.get('/search/commits', {
                        params: {
                            q: "author:".concat(username, " committer-date:").concat(startDate, "..").concat(endDate),
                            sort: 'committer-date',
                            order: 'desc',
                            per_page: perPage,
                            page: page,
                        },
                        headers: { Accept: 'application/vnd.github.cloak-preview+json' },
                    })];
            case 2:
                response = _c.sent();
                commits = response.data.items;
                if (!commits || commits.length === 0)
                    return [3 /*break*/, 4];
                allCommits = __spreadArray(__spreadArray([], allCommits, true), commits, true);
                if (commits.length < perPage)
                    return [3 /*break*/, 4];
                page++;
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
            case 3:
                _c.sent();
                return [3 /*break*/, 1];
            case 4:
                console.log("Fetched ".concat(allCommits.length, " commits for date range ").concat(startDate, " to ").concat(endDate));
                res.json(allCommits);
                return [3 /*break*/, 6];
            case 5:
                error_9 = _c.sent();
                res.status(((_b = error_9.response) === null || _b === void 0 ? void 0 : _b.status) || 500).json({ error: error_9.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server running on http://localhost:".concat(PORT));
});
