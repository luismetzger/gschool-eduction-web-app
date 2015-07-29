// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_correct"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_success_icon", t, e, 0))), s.b(" <strong>Nice!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <a class="button secondary hide-results" data-task-number="'), s.b(s.v(s.f("currentTask", t, e, 0))), s.b('">Hide Results</a>'), s.b("\n" + i), s.b('  <a class="button primary cc-goto">Next Task</a>'), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_wrong"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_error_icon", t, e, 0))), s.b(" <strong>Bummer!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('<div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Command Challenges">'), s.b("\n" + i), s.b('  <button id="ask-question" data-featurette="modal-trigger" data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), s.b("\n" + i), s.b('  <a class="button primary cc-test" data-default-text="Try Again">Try Again</a>'), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_results"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<iframe id="results-'), s.b(s.v(s.f("currentTask", t, e, 0))), s.b('" class="command-results" src="'), s.b(s.v(s.f("url", t, e, 0))), s.b('"></iframe>'), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_task"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<div class="mixed-box task_view">'), s.b("\n" + i), s.b('  <div id="instructions" class="box-header">'), s.b("\n" + i), s.b('    <h2 id="task-count">Challenge Task '), s.b(s.v(s.f("currentTask", t, e, 0))), s.b(" of "), s.b(s.v(s.f("totalTasks", t, e, 0))), s.b("</h2>"), s.b("\n" + i), s.b('    <h1 id="task" class="markdown-zone">'), s.b(s.t(s.d("taskData.body", t, e, 0))), s.b("</h1>"), s.b("\n" + i), s.b('    <p id="task-notes">Type in your command below, then press Enter.</p>'), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b('  <div id="feedback"></div>'), s.b("\n" + i), s.b('  <div class="box-content">'), s.b("\n" + i), s.b('    <div class="workspace">'), s.b("\n" + i), s.b('      <div class="cc-workspace">'), s.b("\n" + i), s.b('        <div class="cc-editor-container">'), s.b("\n" + i), s.b('          <div class="terminal"></div>'), s.b("\n" + i), s.b("        </div>"), s.b("\n" + i), s.b("      </div>"), s.b("\n" + i), s.b("    </div>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b('  <div class="box-footer"></div>'), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_correct"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_success_icon", t, e, 0))), s.b(" <strong>Well done!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <a class="button primary icon-on-right cc-goto" data-task="'), s.b(s.v(s.f("nextTask", t, e, 0))), s.b('">Next task '), s.b(s.t(s.f("next", t, e, 0))), s.b("</a>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_finished"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_success_icon", t, e, 0))), s.b(" <strong>Congrats!</strong> You completed the challenge!</p>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_inactive_task_failed"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<p class="box-action-text"><strong>Oops!</strong> It looks like Task '), s.b(s.v(s.f("failedTask", t, e, 0))), s.b(" is no longer passing.</p>"), s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <button id="ask-question" data-featurette="modal-trigger" data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), s.b("\n" + i), s.b('  <a class="button primary cc-test" data-task="'), s.b(s.v(s.f("currentTask", t, e, 0))), s.b('">Recheck work</a>'), s.b("\n" + i), s.b('  <a class="button button-alert cc-goto" data-task="'), s.b(s.v(s.f("failedTask", t, e, 0))), s.b('">Go to task '), s.b(s.v(s.f("failedTaskAsWord", t, e, 0))), s.b("</a>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_neutral"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_info_icon", t, e, 0))), s.b(" <strong>Important:</strong> The code you write in each task should be added to the code written in the previous task.</p>"), s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <button class="secondary icon-on-right show-results-button">Preview '), s.b(s.t(s.f("preview", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.b('  <button class="secondary icon-on-right show-workspace-button hidden">Editor '), s.b(s.t(s.f("editor", t, e, 0))), s.b("</a>"), s.b("\n" + i), s.b('  <button id="ask-question" class="secondary" data-featurette="modal-trigger" data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), s.b("\n" + i), s.b('  <button class="primary cc-test" data-task="'), s.b(s.v(s.f("task", t, e, 0))), s.b('" data-default-text="Check Work">Check Work</a>'), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_wrong"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_error_icon", t, e, 0))), s.b(" <strong>Bummer!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <button class="secondary icon-on-right show-results-button">Preview '), s.b(s.t(s.f("preview", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.b('  <button class="secondary icon-on-right show-workspace-button hidden">Editor '), s.b(s.t(s.f("editor", t, e, 0))), s.b("</a>"), s.b("\n" + i), s.b('  <button id="ask-question" data-featurette="modal-trigger" data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), s.b("\n" + i), s.b('  <button class="primary cc-test" data-task="'), s.b(s.v(s.f("failedTask", t, e, 0))), s.b('" data-default-text="Recheck work">Recheck Work</a>'), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/instructions"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<h2 id="task-count">Challenge Task '), s.b(s.v(s.f("task", t, e, 0))), s.b(" of "), s.b(s.v(s.f("totalTasks", t, e, 0))), s.b("</h2>"), s.b("\n" + i), s.b('<h1 id="task" class="markdown-zone">'), s.b(s.t(s.f("body", t, e, 0))), s.b("</h1>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["profile/github_repo"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<li class="grid-50 tablet-grid-50">'), s.b("\n" + i), s.b('  <div class="content-block">'), s.b("\n" + i), s.b('    <div class="content-meta">'), s.b("\n" + i), s.b('      <a href="'), s.b(s.v(s.f("repoUrl", t, e, 0))), s.b('">'), s.b("\n" + i), s.b('        <span class="icon icon-github"></span>'), s.b("\n" + i), s.b("        <strong>GitHub Repository</strong>"), s.b("\n" + i), s.b("        <h3>"), s.b(s.v(s.f("repoName", t, e, 0))), s.b("</h3>"), s.b("\n" + i), s.b("      </a>"), s.b("\n" + i), s.b('      <p class="description">'), s.b(s.v(s.f("repoDescription", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('      <div class="content-actions-container content-stats">'), s.b("\n" + i), s.b("        <ul>"), s.b("\n" + i), s.b("          <li>"), s.b("\n" + i), s.b('            <a href="'), s.b(s.v(s.f("repoForksUrl", t, e, 0))), s.b('">'), s.b("\n" + i), s.b("              <strong>"), s.b(s.v(s.f("repoForks", t, e, 0))), s.b("</strong>"), s.b("\n" + i), s.b("              <p>Forks</p>"), s.b("\n" + i), s.b("            </a>"), s.b("\n" + i), s.b("          </li>"), s.b("\n" + i), s.b("          <li>"), s.b("\n" + i), s.b('            <a href="'), s.b(s.v(s.f("repoStargazersUrl", t, e, 0))), s.b('">'), s.b("\n" + i), s.b("              <strong>"), s.b(s.v(s.f("repoStargazers", t, e, 0))), s.b("</strong>"), s.b("\n" + i), s.b("              <p>Stargazers</p>"), s.b("\n" + i), s.b("            </a>"), s.b("\n" + i), s.b("          </li>"), s.b("\n" + i), s.b("        </ul>"), s.b("\n" + i), s.s(s.f("repoOwner", t, e, 1), t, e, 0, 754, 784, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("        <p>Owner</p>"), s.b("\n" + i)
            }), t.pop()), s.s(s.f("repoOwner", t, e, 1), t, e, 1, 0, 0, "") || (s.b("        <p>Contributor</p>"), s.b("\n" + i)), s.b("      </div>"), s.b("\n" + i), s.b("    </div>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b("</li>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_error"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<div class="box-actions icons-only alert error">'), s.b("\n" + i), s.b('  <p class="box-action-text">'), s.b("\n" + i), s.b("    "), s.b(s.t(s.f("alert_error_icon", t, e, 0))), s.b("\n" + i), s.b("    <strong>Bummer!</strong>"), s.b("\n" + i), s.s(s.f("response", t, e, 1), t, e, 0, 152, 178, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("      "), s.b(s.t(s.f("response", t, e, 0))), s.b("\n" + i)
            }), t.pop()), s.s(s.f("response", t, e, 1), t, e, 1, 0, 0, "") || (s.b("      Unfortunately, that answer is incorrect."), s.b("\n" + i)), s.b("  </p>"), s.b("\n" + i), s.b('  <div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Quiz Pages">'), s.b("\n" + i), s.b('    <a href="'), s.b(s.t(s.f("skip_quiz_url", t, e, 0))), s.b('" class="button secondary">Skip Quiz</a>'), s.b("\n" + i), s.b('    <a href="'), s.b(s.t(s.f("review_video_url", t, e, 0))), s.b('" class="button secondary">Review Video</a>'), s.b("\n" + i), s.b('    <button id="ask-question" data-featurette="modal-trigger" data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), s.b("\n" + i), s.b('    <button class="primary icon-on-right" data-next-question>Next Question '), s.b(s.t(s.f("icon_right_arrow", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_neutral"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<div class="box-actions icons-only alert info">'), s.b("\n" + i), s.b('  <p class="box-action-text">'), s.b(s.t(s.f("instruction", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('  <div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Quiz Pages">'), s.b("\n" + i), s.b('    <a href="'), s.b(s.t(s.f("skip_quiz_url", t, e, 0))), s.b('" class="button secondary">Skip Quiz</a>'), s.b("\n" + i), s.b('    <a href="'), s.b(s.t(s.f("review_video_url", t, e, 0))), s.b('" class="button secondary">Review Video</a>'), s.b("\n" + i), s.b('    <button id="ask-question" class="secondary" data-featurette="modal-trigger" data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), s.b("\n" + i), s.b('    <button class="primary disabled icon-on-right" data-next-question>Next Question '), s.b(s.t(s.f("icon_right_arrow", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_success"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<div class="box-actions icons-only alert success">'), s.b("\n" + i), s.b('  <p class="box-action-text">'), s.b("\n" + i), s.b("    "), s.b(s.t(s.f("alert_success_icon", t, e, 0))), s.b("\n" + i), s.b("    <strong>Well done!</strong>"), s.b("\n" + i), s.s(s.f("response", t, e, 1), t, e, 0, 159, 185, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("      "), s.b(s.t(s.f("response", t, e, 0))), s.b("\n" + i)
            }), t.pop()), s.s(s.f("response", t, e, 1), t, e, 1, 0, 0, "") || (s.b("      That's the correct answer."), s.b("\n" + i)), s.b("  </p>"), s.b("\n" + i), s.b('  <div class="box-action-buttons">'), s.b("\n" + i), s.b('    <button class="primary icon-on-right" data-next-question>Next Question '), s.b(s.t(s.f("icon_right_arrow", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/fill_in_the_blank"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<ul class="quiz-answers fill-in-blank">'), s.b("\n" + i), s.s(s.f("answers", t, e, 1), t, e, 0, 54, 263, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("  <li>"), s.b("\n" + i), s.b('    <form id="fill-in-blank" data-quiz-fitb-form-action="'), s.b(s.v(s.f("href", t, e, 0))), s.b('">'), s.b("\n" + i), s.b("      "), s.b(s.t(s.f("answer", t, e, 0))), s.b("\n" + i), s.b('      <input type="submit" value="Submit Answer" id="submit" class="button button-primary">'), s.b("\n" + i), s.b("    </form>"), s.b("\n" + i), s.b("  </li>"), s.b("\n" + i)
            }), t.pop()), s.b("</ul>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/multiple_choice"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<ul class="quiz-answers multiple-choice">'), s.b("\n" + i), s.s(s.f("answers", t, e, 1), t, e, 0, 56, 232, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("  <li>"), s.b("\n" + i), s.b('    <a href="'), s.b(s.v(s.f("href", t, e, 0))), s.b('" data-quiz-answer-key="'), s.b(s.t(s.f("abcd", t, e, 0))), s.b('">'), s.b("\n" + i), s.b('      <strong class="abc">'), s.b(s.t(s.f("abcd", t, e, 0))), s.b("</strong>"), s.b("\n" + i), s.b('      <div class="answer">'), s.b(s.t(s.f("answer", t, e, 0))), s.b("</div>"), s.b("\n" + i), s.b("    </a>"), s.b("\n" + i), s.b("  </li>"), s.b("\n" + i)
            }), t.pop()), s.b("</ul>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/question"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.s(s.f("video", t, e, 1), t, e, 0, 10, 25, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("  "), s.b(s.t(s.f("video", t, e, 0))), s.b("\n" + i)
            }), t.pop()), s.s(s.f("image", t, e, 1), t, e, 0, 46, 87, "{{ }}") && (s.rs(t, e, function(t, e, i) {
                i.b('<img src="'), i.b(i.v(i.f("image", t, e, 0))), i.b('" alt="Quiz Question">')
            }), t.pop()), s.b("\n" + i), s.b('<strong class="question-count">Quiz Question '), s.b(s.v(s.f("current_question", t, e, 0))), s.b(" of "), s.b(s.v(s.f("total_questions", t, e, 0))), s.b("</strong>"), s.b("\n" + i), s.b("<h1>"), s.b(s.t(s.f("question", t, e, 0))), s.b("</h1>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/true_false"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<ul class="quiz-answers true-false">'), s.b("\n" + i), s.s(s.f("answers", t, e, 1), t, e, 0, 51, 172, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("  <li>"), s.b("\n" + i), s.b('    <a href="'), s.b(s.v(s.f("href", t, e, 0))), s.b('" data-quiz-answer-key="'), s.b(s.t(s.f("answer", t, e, 0))), s.b('">'), s.b("\n" + i), s.b("      <strong>"), s.b(s.v(s.f("answer", t, e, 0))), s.b("</strong>"), s.b("\n" + i), s.b("    </a>"), s.b("\n" + i), s.b("  </li>"), s.b("\n" + i)
            }), t.pop()), s.b("</ul>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["shared/added_to_home_footer"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<li class="resume"><a class="button button-primary" href="'), s.b(s.v(s.f("activityUrl", t, e, 0))), s.b('">Start</a></li>'), s.b("\n" + i), s.b('<li class="add-to-home"><a href="'), s.b(s.v(s.f("removeFromHomeUrl", t, e, 0))), s.b('">'), s.b(s.v(s.f("removeFromHomeIcon", t, e, 0))), s.b("</a></li>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["shared/removed_from_home_footer"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<ul class="tags">'), s.b("\n" + i), s.b('  <li class="topic <%= topic.name.parameterize %>"><a href="#"><%= topic.name %></a></li>'), s.b("\n" + i), s.b('  <li class="difficulty"><span>Beginner</span></li>'), s.b("\n" + i), s.b("</ul>"), s.b("\n" + i), s.b('<ul class="actions">'), s.b("\n" + i), s.b('  <li class="add-to-home"><a href="#"><%= icon(\'#add\') %></a></li>'), s.b("\n" + i), s.b("</ul>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["signup/field_error"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b("<p class='error-message'>"), s.b(s.v(s.f("error", t, e, 0))), s.b("</p>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["signup/form_message"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b('<div class="global-message-container featurette in-app '), s.b(s.v(s.f("container_class", t, e, 0))), s.b('" data-featurette="global-message-container" style="display: block;">'), s.b("\n" + i), s.b('  <div class="global-message">'), s.b("\n" + i), s.b('    <div class="row">'), s.b("\n" + i), s.b('      <div class="twelve columns">'), s.b("\n" + i), s.b("        <strong>Bummer!</strong> <p>"), s.b(s.v(s.f("message", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('        <a class="close-message"><span class="icon icon-close"></span></a>'), s.b("\n" + i), s.b("      </div>"), s.b("\n" + i), s.b("    </div>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["workshops/live_error"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.b("<p style='color:red'>There was a problem submitting your question. Try again?</p>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["workshops/live_question"] = new Hogan.Template({
        code: function(t, e, i) {
            var s = this;
            return s.b(i = i || ""), s.s(s.f("preview", t, e, 1), t, e, 0, 12, 69, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("  <li class='placeholder-"), s.b(s.v(s.f("uuid", t, e, 0))), s.b("' style='opacity:0.5'>"), s.b("\n" + i)
            }), t.pop()), s.s(s.f("saved", t, e, 1), t, e, 0, 92, 112, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("  <li id='"), s.b(s.v(s.f("id", t, e, 0))), s.b("'>"), s.b("\n" + i)
            }), t.pop()), s.b("  <div class='avatar "), s.s(s.f("staff", t, e, 1), t, e, 0, 154, 159, "{{ }}") && (s.rs(t, e, function(t, e, i) {
                i.b("staff")
            }), t.pop()), s.b("' style='background-image:"), s.b(s.v(s.f("url", t, e, 0))), s.b("'></div>"), s.b("\n" + i), s.s(s.f("showStar", t, e, 1), t, e, 0, 226, 299, "{{ }}") && (s.rs(t, e, function(t, e, s) {
                s.b("    <a class='star-question'><span class='icon icon-star'></span></a>"), s.b("\n" + i)
            }), t.pop()), s.b("  <strong>"), s.b("\n" + i), s.b("    "), s.s(s.f("profilePath", t, e, 1), t, e, 0, 344, 481, "{{ }}") && (s.rs(t, e, function(t, e, i) {
                i.b('<a href="'), i.b(i.v(i.f("profilePath", t, e, 0))), i.b('" class="author featurette" data-behavior="mini-profile-trigger" data-profile-name="'), i.b(i.v(i.f("profileName", t, e, 0))), i.b('">'), i.b(i.v(i.f("name", t, e, 0))), i.b("</a>")
            }), t.pop()), s.b("\n" + i), s.b("    "), s.s(s.f("profilePath", t, e, 1), t, e, 1, 0, 0, "") || s.b(s.v(s.f("name", t, e, 0))), s.b("\n" + i), s.b("    "), s.s(s.f("staff", t, e, 1), t, e, 0, 557, 596, "{{ }}") && (s.rs(t, e, function(t, e, i) {
                i.b("<span class='marker staff'>Staff</span>")
            }), t.pop()), s.b("\n" + i), s.b("  </strong>"), s.b("\n" + i), s.b("  <p>"), s.b(s.v(s.f("text", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b("</li>"), s.b("\n"), s.fl()
        },
        partials: {},
        subs: {}
    }, "", Hogan, {}),
    function() {
        $(function() {
            return $(".cheatsheet-toggle").on("click", function(t) {
                return t.preventDefault(), $(this).closest("form").find(".markdown-cheatsheet").slideToggle(200)
            }), $(".cheatsheet-close").on("click", function(t) {
                return t.preventDefault(), $(this).closest("form").find(".markdown-cheatsheet").slideUp(200)
            }), $("#edit-post").on("click", function(t) {
                return t.preventDefault(), $("#display-post").hide(), $("#edit-post-form").show(), $("textarea.autogrow").trigger("autosize.resize")
            }), $("#cancel-edit-post").on("click", function(t) {
                return t.preventDefault(), $("#edit-post-form").hide(), $("#display-post").show(), $("textarea.autogrow").trigger("autosize.resize")
            }), $(".new_forum_post button[type=submit], .discussion-reply button[type=submit]").on("click", function() {
                return _.defer(function(t) {
                    return function() {
                        return $(t).attr({
                            disabled: "disabled"
                        })
                    }
                }(this))
            }), $(".post-preview-toggle").on("mousedown", function(t) {
                return t.preventDefault(), $(this).closest(".form-item").find("textarea").focus()
            }), $(".code-attachment-filename").on("click", function() {
                var t;
                return t = $(this).closest("#container").find(".card.course.forum-card a.title").attr("href"), window.open(t)
            })
        })
    }.call(this),
    function() {
        $(function() {
            var t;
            return t = function() {
                function t() {}
                return t.modals = {}, t.handleTrigger = function(e) {
                    var i, s;
                    return $.browser.mobile || e.metaKey || 2 === e.which ? !0 : (t.container || (t.container = $("#mini-profile-container")), e.preventDefault(), s = $(e.currentTarget), i = s.data("profile-name"), t.modals[i] ? t.modals[i].showOverlay() : t.createModalFor(i))
                }, t.createModalFor = function(t) {
                    var e;
                    return e = $("<div class='modal mini-profile' id='mini-profile-" + t + "' style='display: none'/>"), e.load("/mini_profile/" + t, function(i) {
                        return function() {
                            return i.container.append(e), new Featurette.registered_features["points-chart"](e.find(".chart")[0]), i.modals[t] = new Featurette.registered_features.modal(e[0]), i.modals[t].showOverlay()
                        }
                    }(this))
                }, t
            }(), $(document).on("click", "[data-behavior=mini-profile-trigger]", t.handleTrigger)
        })
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.duplicate = e(this.duplicate, this), this.originContent = $("[data-markup-duplicate]").html(), this.duplicate($("[data-markup-duplicate]"), $("[data-markup-duplicate-target]"))
            }
            return t.prototype.duplicate = function(t, e) {
                return e.html(this.originContent)
            }, t
        }(), $(function() {
            return new t
        })
    }.call(this),
    function() {
        mejs.MediaElementDefaults.pluginPath = "", mejs.MediaElementDefaults.flashName = "/flash/flashmediaelement.swf", $("body").on("click", ".mejs-captions-selector input", function() {
            return setTimeout(function() {
                return function() {
                    return $("body").click()
                }
            }(this), 0)
        })
    }.call(this),
    function() {
        this.Treehouse = {
            onFirstInit: function(t) {
                return this.firstInitCallbacks.push(t)
            },
            firstInitCallbacks: [],
            onInit: function(t) {
                return this.initCallbacks.push(t)
            },
            initCallbacks: [],
            init: function() {
                var t, e, i, s, r, o, n, a;
                if (!this.firstInitFired) {
                    for (o = this.firstInitCallbacks, e = 0, s = o.length; s > e; e++)(t = o[e])();
                    this.firstInitFired = !0
                }
                for (n = this.initCallbacks, a = [], i = 0, r = n.length; r > i; i++) t = n[i], a.push(t());
                return a
            },
            cleanup: function(t) {
                var e;
                return (e = Featurette.get(t.id)) && "function" == typeof e.stopListening ? e.stopListening() : void 0
            },
            debug: function() {
                return window.console ? console.log(Array.prototype.slice.call(arguments)) : void 0
            }
        }
    }.call(this),
    function() {
        Treehouse.onFirstInit(function() {
            return function() {
                var t;
                return t = $.cleanData, $.cleanData = function(e) {
                    var i, s, r;
                    for (s = 0, r = e.length; r > s; s++) i = e[s], $(i).trigger("removed");
                    return t(e)
                }
            }(), $(document).on("removed", "[data-featurette]", function(t) {
                return Treehouse.cleanup(t.target)
            }), null == $.cookie("notbot") && $.post("/visitors/not-bot", {
                _method: "PUT"
            }), $(document).on("click touch", ".menu-toggle", function(t) {
                return t.preventDefault(), $(t.currentTarget).toggleClass("is-checked")
            }), $(document).on("click", ".clickonce", function(t) {
                var e;
                return e = $(t.currentTarget), e.hasClass("disabled") ? t.preventDefault() : e.addClass("disabled")
            }), $(document).on("click", "a[data-pjax]", function(t) {
                var e;
                return t.preventDefault(), e = $(this).closest("[data-pjax-container]"), $.pjax.click(t, {
                    container: e
                })
            }), $(document).on("pjax:end", function() {
                return Treehouse.init()
            })
        }), Treehouse.onInit(function() {
            var t;
            return Featurette.load(), $("html").hasClass("ie") && $("use").each(function() {
                return function(t, e) {
                    return e = $(e), e.attr("xlink:href", e.attr("xlink:href").replace(/.*.svg/, ""))
                }
            }(this)), t = "select, input:file", $(t).not('.editor textarea, select.drop-down, select[multiple], select[data-featurette="form-select"], select[data-featurette="department-select"], .uniform-processed').uniform({
                autoHide: !1,
                fileButtonClass: "button secondary",
                selectClass: "form-element"
            }).addClass("uniform-processed"), $(".form-item label").not(".prefill, .in-field-label-processed, .ghost-form label").inFieldLabels().addClass("in-field-label-processed"), $(".autogrow").not(".autogrow-processed").autosize({
                append: ""
            }).addClass("autogrow-processed"), $("input, textarea").not(".placeholder-processed").placeholder().addClass("placeholder-processed"), $(".ghost-form input, .ghost-form textarea, .ghost-form select").off("focus.ghost-form, blur.ghost-form").on("focus.ghost-form", function() {
                return $(this).closest(".form-item, .adjacent-form-item").addClass("filled focused")
            }).on("blur.ghost-form", function() {
                return $(this).closest(".form-item, .adjacent-form-item").removeClass("filled"), "" === this.value ? $(this).closest(".form-item, .adjacent-form-item").removeClass("focused") : void 0
            }).each(function() {
                return "" !== this.value ? $(this).closest(".form-item, .adjacent-form-item").addClass("focused") : void 0
            }), $(".button-toggle label input[type=radio]").change(function() {
                $(this).attr("name") ? $(this).parent().addClass("selected").siblings().removeClass("selected") : $(this).parent().toggleClass("selected")
            })
        })
    }.call(this),
    function() {
        jQuery.fn.cssAnimate = function(t) {
            return null == t && (t = 400), this.addClass("animating"), setTimeout(function(t) {
                return function() {
                    return t.removeClass("animating")
                }
            }(this), t), this
        }
    }.call(this),
    function() {
        Treehouse.onFirstInit(function() {
            return $(document).on("pjax:start", function() {
                var t;
                return null != (t = Featurette.get("layout")) ? t.loading() : void 0
            }), $(document).on("pjax:end", function() {
                var t;
                return null != (t = Featurette.get("layout")) && t.loaded(), "undefined" != typeof _gaq && null !== _gaq ? _gaq.push(["_trackPageview"]) : void 0
            })
        })
    }.call(this),
    function() {
        var t, e, i = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            o = [].slice;
        e = function() {
            function t(t) {
                var e;
                e = $(t).find(".tooltip").parent().find(":input"), e.focus(function() {
                    var t;
                    return t = $(this).parent().find(".tooltip"), t.data("hide-on-mobile") && $(window).width() <= 480 ? void 0 : t.fadeIn()
                }), e.blur(function() {
                    return $(this).parent().find(".tooltip").fadeOut()
                }), $(t).submit(function() {
                    return $(t).find("button#submit").html("Processing..."), $(t).find("button#submit").attr("disabled", "true")
                })
            }
            return t
        }(), window.StandardForm = e, t = function(t) {
            function e(t) {
                this.unwrapErrors = i(this.unwrapErrors, this), this.accountForm = $(t), this.accountEmail = this.accountForm.find("#account_signup_email, #person_email, #account_signup_account_manager_email"), this.accountProfile = this.accountForm.find("#account_signup_profile_name, #person_profile_name"), this.accountName = this.accountForm.find("#account_signup_first_name, #account_signup_last_name, #person_first_name, #person_last_name"), this.accountProfileName = this.accountProfile.val(), this.currentEmail = this.accountEmail.val(), e.__super__.constructor.call(this, this.accountForm), this.accountEmail.change(function(t) {
                    return function() {
                        return t.verifyEmailAddress()
                    }
                }(this)), this.accountProfile.change(function(t) {
                    return function() {
                        return t.verifyProfileName()
                    }
                }(this)), this.accountName.change(function(t) {
                    return function() {
                        return t.suggestProfileName()
                    }
                }(this)), this.verifyEmailAddress(), this.verifyProfileName(), this.suggestProfileName(), this.ageCheck = this.accountForm.find("#account_signup_age_check"), this.ageCheck.change(function() {
                    return "lt13" === $(this).val() ? ($(".above-13").hide(), $(".under-13").show()) : ($(".above-13").show(), $(".under-13").hide())
                }), this.ageCheck.change()
            }
            return r(e, t), e.prototype.verifyEmailAddress = function() {
                var t, e, i, s;
                return e = this.accountEmail, i = e.siblings("label"), t = e.val(), s = $("meta[name='csrf-token']").attr("content"), this.clearFormErrors(e), t !== this.currentEmail ? $.ajax("/account/email_address", {
                    type: "POST",
                    dataType: "json",
                    data: {
                        email: t
                    },
                    headers: {
                        "X-CSRF-Token": s
                    },
                    error: function(t) {
                        return function(s) {
                            var r;
                            return t.unwrapErrors(e, i), t.clearFormErrors(e), e.siblings("label").wrap('<div class="field_with_errors" />'), e.wrap('<div class="field_with_errors" />'), r = JSON.parse(s.responseText), e.after("<p class='error-message'>" + r.error + "</p>")
                        }
                    }(this),
                    success: function(t) {
                        return function() {
                            return t.unwrapErrors(e, i), null == e.val() ? t.clearFormErrors(e) : void 0
                        }
                    }(this)
                }) : void 0
            }, e.prototype.verifyProfileName = function() {
                var t, e, i, s, r, o;
                return t = this.accountProfile, i = t.siblings("label"), r = t.val(), e = $(this.accountName[0]).val(), s = $(this.accountName[1]).val(), o = $("meta[name='csrf-token']").attr("content"), r !== this.accountProfileName ? $.ajax("/account/profile_name", {
                    type: "POST",
                    dataType: "json",
                    data: {
                        profile_name: r,
                        first_name: e,
                        last_name: s
                    },
                    headers: {
                        "X-CSRF-Token": o
                    },
                    error: function(e) {
                        return function(s) {
                            var r;
                            return e.unwrapErrors(t, i), e.clearFormErrors(t), t.siblings("label").wrap('<div class="field_with_errors" />'), t.wrap('<div class="field_with_errors" />'), r = JSON.parse(s.responseText), t.val(r.suggestion), t.after("<p class='error-message'>" + r.error + "</p>")
                        }
                    }(this),
                    success: function(e) {
                        return function() {
                            return e.unwrapErrors(t, i), e.clearFormErrors(t)
                        }
                    }(this)
                }) : void 0
            }, e.prototype.suggestProfileName = function() {
                var t, e, i, s;
                return t = $(this.accountName[0]).val().toLowerCase(), i = $(this.accountName[1]).val().toLowerCase(), e = !!t, s = !!i, !this.accountProfile.val() && e && s && (this.accountProfile.val("" + t + i), this.accountProfile.blur()), this.verifyProfileName()
            }, e.prototype.unwrapErrors = function() {
                var t, e, i, s, r;
                for (e = 1 <= arguments.length ? o.call(arguments, 0) : [], r = [], i = 0, s = e.length; s > i; i++) t = e[i], r.push(t.closest("div").hasClass("field_with_errors") ? t.unwrap() : void 0);
                return r
            }, e.prototype.clearFormErrors = function(t) {
                return t.siblings("p.error-message").remove()
            }, e
        }(e), window.AccountForm = t
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Treehouse.View = function() {
            function e(e) {
                this.clearElementsCache = t(this.clearElementsCache, this), this.cid = _.uniqueId("featurette-view-"), this.el = $(e), this.data = this.el.data(), this.elements = []
            }
            return e.prototype.listeningTo = [], e.prototype.get = function(t) {
                var e;
                return (e = this.elements)[t] || (e[t] = this.el.find(t))
            }, e.prototype.clearElementsCache = function() {
                return this.elements = []
            }, e.prototype.on = function(t, e, i) {
                return i ? this.el.on(this.addNamespace(t), e, i) : (i = e, this.el.on(this.addNamespace(t), i))
            }, e.prototype.listenTo = function(t, e, i, s) {
                return null == s && (s = {}), this.listeningTo = _.union(this.listeningTo, [t]), $(t).on(this.addNamespace(e), i), s.triggerImmediately ? $(t).trigger(e) : void 0
            }, e.prototype.stopListening = function() {
                var t, e, i, s, r;
                for (this.el.off(this.addNamespace()), s = this.listeningTo, r = [], e = 0, i = s.length; i > e; e++) t = s[e], r.push($(t).off(this.addNamespace()));
                return r
            }, e.prototype.addNamespace = function(t) {
                return null == t && (t = ""), "" + t + "." + this.cid
            }, e
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("alert", Treehouse.Alert = function(e) {
            function s() {
                this.closeAlert = t(this.closeAlert, this), s.__super__.constructor.apply(this, arguments), this.on("click", "[data-close-alert]", this.closeAlert), this.el.hasClass("fixed") && $("html").addClass("has-fixed-alert")
            }
            return i(s, e), s.prototype.closeAlert = function(t) {
                return t.preventDefault(), this.el.addClass("closed"), 0 === $(".alert.fixed:not(.closed)").length ? $("html.has-fixed-alert").addClass("closed-all-fixed-alerts") : void 0
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("modal", Treehouse.Modal = function(e) {
            function s(e) {
                this.onKeyup = t(this.onKeyup, this), this.closeOverlay = t(this.closeOverlay, this), this.safeCloseOverlay = t(this.safeCloseOverlay, this), this.playVideo = t(this.playVideo, this), s.__super__.constructor.call(this, e), this.on("click", ".modal-close, .modal-close-extra, [data-modal-close]", this.safeCloseOverlay), this.listenTo(document, "keyup", this.onKeyup)
            }
            return i(s, e), s.stack = [], s.closeCurrentModal = function(t) {
                var e;
                return null == t && (t = {}), (e = this.stack.pop()) && (e.closeOverlay(t), t.stack) ? this.addToStack(e) : void 0
            }, s.addToStack = function(t) {
                return this.stack.push(t)
            }, s.showLastModal = function() {
                var t;
                return null != (t = this.stack.pop()) ? t.showOverlay({
                    restoring: !0
                }) : void 0
            }, s.prototype.showOverlay = function(t) {
                return null == t && (t = {}), this.constructor.closeCurrentModal({
                    stack: t.stack
                }), this.constructor.addToStack(this), this.tarp().show(function(t) {
                    return function() {
                        var e, i;
                        return i = "fixed" === t.el.css("position") ? 0 : $(window).scrollTop(), e = i + $(window).height(), _.defer(function() {
                            return $(window).scrollTop(i)
                        }), t.el.show().css({
                            top: e,
                            opacity: 0
                        }).animate({
                            top: i,
                            opacity: 1
                        }, 150), t.el.addClass("modal-active"), t.el.trigger("modal:show"), t.el.data("modal-video-autoplay") && t.playVideo(), t.isVisible = !0
                    }
                }(this))
            }, s.prototype.playVideo = function() {
                return this.el.find("video").trigger("play").on("ended", function(t) {
                    return function() {
                        return t.closeOverlay()
                    }
                }(this))
            }, s.prototype.safeCloseOverlay = function(t) {
                return null != t && t.preventDefault(), this.data.uncloseable ? !0 : this.closeOverlay()
            }, s.prototype.closeOverlay = function(t) {
                return null == t && (t = {}), this.el.find("video").trigger("pause"), this.tarp().hide(), this.el.hide(), this.el.removeClass("modal-active"), this.el.trigger("modal:close"), this.isVisible = !1, this.constructor.stack.pop(), this.constructor.showLastModal()
            }, s.prototype.onKeyup = function(t) {
                return 27 === t.which && this.isVisible ? this.safeCloseOverlay() : void 0
            }, s.prototype.tarp = function() {
                return this.tarpEl || (this.tarpEl = Featurette.get("tarp"))
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("help-modal", t = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return i(e, t), e.prototype.showOverlay = function() {
                return Featurette.get("help-form").resetContactForm(), e.__super__.showOverlay.apply(this, arguments)
            }, e
        }(Treehouse.Modal))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("wizard-modal", t = function(t) {
            function i() {
                return this.closeOverlay = e(this.closeOverlay, this), i.__super__.constructor.apply(this, arguments)
            }
            return s(i, t), i.prototype.showOverlay = function(t) {
                return null == t && (t = {}), i.__super__.showOverlay.apply(this, arguments), t.restoring ? void 0 : $(document).trigger("wizard-opened")
            }, i.prototype.closeOverlay = function(t) {
                return null == t && (t = {}), i.__super__.closeOverlay.apply(this, arguments), t.stack ? void 0 : $(document).trigger("wizard-closed")
            }, i
        }(Treehouse.Modal))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("content-feedback-modal", t = function(t) {
            function i() {
                this.onInput = e(this.onInput, this), this.setRating = e(this.setRating, this), this.removeStar = e(this.removeStar, this), this.setStar = e(this.setStar, this), this.afterFormSubmit = e(this.afterFormSubmit, this), this.onSubmit = e(this.onSubmit, this), i.__super__.constructor.apply(this, arguments), this.on("mouseenter", ".content-feedback-star", this.setStar), this.on("mouseleave", ".content-feedback-star", this.removeStar), this.on("click", ".content-feedback-star", this.setRating), this.on("input", ".expanding-input", this.onInput), this.on("submit", "form", this.onSubmit), this.el.find(".expanding-input").trigger("input")
            }
            return s(i, t), i.prototype.onSubmit = function(t) {
                var e;
                return t.preventDefault(), e = $(t.currentTarget), $.post(e.attr("action"), e.serialize(), this.afterFormSubmit)
            }, i.prototype.afterFormSubmit = function() {
                return this.closeOverlay(), $(".feedback-callout").hide()
            }, i.prototype.setStar = function(t) {
                return this.el.find(".content-feedback-star").removeClass("starred"), $(t.currentTarget).parent().prevAll().addBack().children("label").addClass("starred")
            }, i.prototype.removeStar = function(t) {
                return this.el.find(".content-feedback-star").removeClass("starred"), $(t.currentTarget).parent().prevAll().addBack().children("label").removeClass("starred")
            }, i.prototype.setRating = function(t) {
                return this.el.find(".content-feedback-star").removeClass("selected"), $(t.currentTarget).parent().prevAll().addBack().children("label").addClass("selected"), this.el.find(".expanding-input").focus(), this.el.find(".button").show()
            }, i.prototype.onInput = function(t) {
                var e, i;
                return i = $.trim($(t.currentTarget).val()), e = i ? "fadeOut" : "fadeIn", this.el.find(".label-optional")[e]()
            }, i
        }(Treehouse.Modal))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("workspace-settings-modal", Treehouse.WorkspaceSettingsModal = function(e) {
            function s(e) {
                this.onDeleteWorkspace = t(this.onDeleteWorkspace, this), s.__super__.constructor.call(this, e), this.on("click", "a.delete", this.onDeleteWorkspace)
            }
            return i(s, e), s.prototype.onDeleteWorkspace = function() {
                return confirm("This will permanantly delete everything within this workspace and cannot be undone. Do you still want to delete?") ? (this.closeOverlay(), $("#workspace-" + this.el.data("workspace-id") + " .deletion-cover").show()) : !1
            }, s
        }(Treehouse.Modal))
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("code-challenge-error-modal", t = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return i(e, t), e.prototype.setError = function(t) {
                return this.el.find("#challenge-error-modal-text").text(t)
            }, e.prototype.closeOverlay = function() {
                return this.setError(""), e.__super__.closeOverlay.call(this)
            }, e
        }(Treehouse.Modal))
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("track-changelog-modal", t = function(t) {
            function e() {
                e.__super__.constructor.apply(this, arguments), $(function(t) {
                    return function() {
                        return t.el.data("previewing") === !0 ? t.showOverlay() : void 0
                    }
                }(this))
            }
            return i(e, t), e
        }(Treehouse.Modal))
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("tarp", t = function(t) {
            function e(t) {
                e.__super__.constructor.call(this, t), this.on("click touchstart", function() {
                    return Treehouse.Modal.closeCurrentModal()
                })
            }
            return i(e, t), e.prototype.show = function(t) {
                return this.el.css({
                    opacity: 0
                }).show().animate({
                    opacity: 1
                }, 100, t)
            }, e.prototype.hide = function() {
                return this.el.hide()
            }, e
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("table-expander", function(e) {
            function s() {
                this.toggle = t(this.toggle, this), s.__super__.constructor.apply(this, arguments), this.on("click", this.data.expander, this.toggle), this.rows = this.el.find("tr:gt(" + this.data.rows + ")"), this.rows.hide()
            }
            return i(s, e), s.prototype.toggle = function() {
                return $(this.data.expander).toggleClass("target-expanded"), this.rows.toggle()
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Featurette.register("nav-select", function() {
            function e(e) {
                this.updateLocation = t(this.updateLocation, this), this.el = $(e), this.el.on("change", this.updateLocation)
            }
            return e.prototype.updateLocation = function() {
                return window.location = this.el.val()
            }, e
        }())
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.updateTotalOnce = e(this.updateTotalOnce, this), this.updateTotal = e(this.updateTotal, this), this.el = $(t), this.pointsUpdated = !1
            }
            return t.prototype.updateTotal = function(t) {
                return t ? this.el.html(this.addCommas(t)) : $.get("/user/total_points", function(t) {
                    return function(e) {
                        return t.el.html(t.addCommas(e.points))
                    }
                }(this))
            }, t.prototype.updateTotalOnce = function() {
                return this.pointsUpdated ? void 0 : (this.updateTotal(), this.pointsUpdated = !0)
            }, t.prototype.addCommas = function(t) {
                return t.toString().replace(/\,/g, "").replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            }, t
        }(), Treehouse.PointsCounter = new t("#points-counter")
    }.call(this),
    function() {
        Treehouse.queryString = function() {
            var t, e, i, s, r, o;
            if (t = new Object, i = location.href.split("?")[1], !i) return t;
            for (o = i.split("&"), s = 0, r = o.length; r > s; s++) e = o[s], e = e.split("="), t[e[0]] = e[1];
            return t
        }
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Quiz = function(e) {
            function s() {
                this.render = t(this.render, this), this.showBadgeEarned = t(this.showBadgeEarned, this), this.processResponse = t(this.processResponse, this), this.submit = t(this.submit, this), s.__super__.constructor.apply(this, arguments), this.quizData = this.data.quiz, this.feedbackEl = this.el.find("[data-quiz-element=feedback]"), this.questionEl = this.el.find("[data-quiz-element=question]"), this.answersEl = this.el.find("[data-quiz-element=answers]"), this.render()
            }
            return i(s, e), s.prototype.submit = function(t, e) {
                return null == e && (e = {}), this.quizData.quiz_attempt && (e.quiz_attempt = this.quizData.quiz_attempt), $.ajax({
                    type: "POST",
                    url: t,
                    data: e,
                    dataType: "json",
                    success: this.processResponse,
                    error: function() {
                        return function(t) {
                            return Treehouse.debug("Error in Treehouse.Quiz#submit()", JSON.stringify(t))
                        }
                    }(this)
                })
            }, s.prototype.processResponse = function(t) {
                switch (this.quizData = t, t.quiz_status) {
                    case "passed":
                        Treehouse.PointsCounter.updateTotal(), t.badge_earned ? this.showBadgeEarned(t.track_completed) : this.showPassed();
                        break;
                    case "failed":
                        this.showFailed()
                }
                return this.generateFeedback(), Treehouse.init()
            }, s.prototype.showFailed = function() {
                return Featurette.get("failed-quiz-modal").showOverlay()
            }, s.prototype.showPassed = function() {
                var t;
                return (t = Featurette.get("quiz-completed-modal")) || (t = Featurette.get("badge-modal")), t.showOverlay()
            }, s.prototype.showBadgeEarned = function(t) {
                var e;
                return e = Featurette.get("badge-modal").showOverlay(), this.chooseFooter(t, e)
            }, s.prototype.chooseFooter = function(t, e) {
                return t === !0 ? (e.el.find("#badge-awarded-footer").hide(), e.el.find("#track-completed-footer").show()) : void 0
            }, s.prototype.render = function() {
                return this.clearFeedback(), this.generateQuestion(), this.generateAnswers(), Treehouse.init()
            }, s.prototype.generateQuestion = function() {
                var t;
                return t = HoganTemplates["quizzes/question"].render(this.quizData.question), this.questionEl.html(t).find("a").attr("target", "_blank")
            }, s.prototype.generateAnswers = function() {
                var t, e;
                return null != (e = this.answersView) && "function" == typeof e.empty && e.empty(), t = function() {
                    switch (this.quizData.question.question_type) {
                        case "MultipleChoice":
                            return Treehouse.Quiz.MultipleChoice;
                        case "TrueFalse":
                            return Treehouse.Quiz.TrueFalse;
                        case "FillInTheBlank":
                            return Treehouse.Quiz.FillInTheBlank
                    }
                }.call(this), this.answersView = new t(this.answersEl, {
                    submit: this.submit,
                    answers: _.pick(this.quizData, "answers")
                }), this.answersView.render()
            }, s.prototype.renderFeedback = function(t) {
                var e, i;
                return e = this.el.find("[data-quiz-answer-key].selected"), e.addClass(t), null != (i = this.feedbackView) && i.stopListening(), this.feedbackView = new Treehouse.Quiz.Feedback(this.feedbackEl, {
                    nextQuestion: this.render,
                    quizStatus: this.quizData.quiz_status,
                    questionPassed: this.quizData.answer_passed,
                    feedbackText: this.quizData.feedback,
                    instruction: this.quizData.question.instruction,
                    feedbackType: t
                }), this.feedbackView.render()
            }, s.prototype.generateFeedback = function() {
                return this.renderFeedback(this.quizData.answer_passed ? "success" : "error")
            }, s.prototype.clearFeedback = function() {
                return this.renderFeedback("neutral")
            }, s
        }(Treehouse.View), Featurette.register("quiz", Treehouse.Quiz)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Quiz.Feedback = function(e) {
            function s(e, i) {
                this.nextQuestionProxy = t(this.nextQuestionProxy, this), this.onKeyUp = t(this.onKeyUp, this), s.__super__.constructor.apply(this, arguments), this.quizStatus = i.quizStatus, this.questionPassed = i.questionPassed, this.feedbackText = i.feedbackText, this.nextQuestion = i.nextQuestion, this.feedbackType = i.feedbackType, this.instruction = i.instruction, this.on("click", "[data-next-question]", this.nextQuestionProxy)
            }
            return i(s, e), s.prototype.render = function() {
                return ("error" === this.feedbackType || "success" === this.feedbackType) && this.listenTo(document, "keyup", this.onKeyUp), this.el.html(HoganTemplates["quizzes/feedback_" + this.feedbackType].render({
                    passed: this.questionPassed,
                    response: this.feedbackText,
                    instruction: this.instruction,
                    skip_quiz_url: this.el.data("skip-quiz-url"),
                    review_video_url: this.el.data("review-video-url"),
                    icon_play: this.el.data("icon-play"),
                    icon_right_arrow: this.el.data("icon-right-arrow"),
                    alert_success_icon: this.el.data("alert-success-icon"),
                    alert_error_icon: this.el.data("alert-error-icon")
                }))
            }, s.prototype.empty = function() {
                return this.el.empty(), this.stopListening()
            }, s.prototype.onKeyUp = function(t) {
                return 13 === t.which ? this.nextQuestionProxy() : void 0
            }, s.prototype.nextQuestionProxy = function() {
                return "unfinished" === this.quizStatus ? this.nextQuestion() : void 0
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Quiz.MultipleChoice = function(e) {
            function s(e, i) {
                this.options = i, this.onClick = t(this.onClick, this), this.onKeyUp = t(this.onKeyUp, this), s.__super__.constructor.apply(this, arguments), this.listenTo(document, "keyup", this.onKeyUp), this.on("click", "[data-quiz-answer-key]", this.onClick)
            }
            return i(s, e), s.prototype.template = "quizzes/multiple_choice", s.prototype.render = function() {
                return this.el.html(HoganTemplates[this.template].render(this.options.answers))
            }, s.prototype.onKeyUp = function(t) {
                var e, i;
                if (!this.isDisabled) return (i = this.keyCodes()[t.which]) ? (e = this.el.find("[data-quiz-answer-key=" + i + "]"), this.submitProxy(e)) : void 0
            }, s.prototype.onClick = function(t) {
                return "function" == typeof t.preventDefault && t.preventDefault(), this.isDisabled ? void 0 : this.submitProxy($(t.currentTarget))
            }, s.prototype.submitProxy = function(t) {
                return this.options.submit(t.attr("href")), t.addClass("selected"), this.disable()
            }, s.prototype.disable = function() {
                return this.el.find(".quiz-answers a").addClass("inactive"), this.isDisabled = !0
            }, s.prototype.empty = function() {
                return this.el.empty(), this.stopListening()
            }, s.prototype.keyCodes = function() {
                return this.cachedKeyCodes ? this.cachedKeyCodes : (this.cachedKeyCodes = {}, this.options.answers.answers.forEach(function(t) {
                    return function(e) {
                        return t.cachedKeyCodes[e.abcd.charCodeAt()] = e.abcd
                    }
                }(this)), this.cachedKeyCodes)
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, i) {
                function s() {
                    this.constructor = e
                }
                for (var r in i) t.call(i, r) && (e[r] = i[r]);
                return s.prototype = i.prototype, e.prototype = new s, e.__super__ = i.prototype, e
            };
        Treehouse.Quiz.TrueFalse = function(t) {
            function i() {
                return i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.template = "quizzes/true_false", i.prototype.keyCodes = function() {
                return null != this.cachedKeyCodes ? this.cachedKeyCodes : this.cachedKeyCodes = {
                    70: "False",
                    84: "True"
                }
            }, i
        }(Treehouse.Quiz.MultipleChoice)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Quiz.FillInTheBlank = function(e) {
            function s(e, i) {
                this.options = i, this.onFormSubmit = t(this.onFormSubmit, this), s.__super__.constructor.apply(this, arguments), this.on("submit", "[data-quiz-fitb-form-action]", this.onFormSubmit)
            }
            return i(s, e), s.prototype.onFormSubmit = function(t) {
                var e, i, s;
                return null != t && t.preventDefault(), this.isDisabled ? void 0 : (i = this.el.find("[data-quiz-fitb-form-action]"), s = i.data("quiz-fitb-form-action"), e = {
                    fitb_answers: i.serializeArray()
                }, i.find("input:text").blur().prop("disabled", !0), this.options.submit(s, e), this.disable())
            }, s.prototype.disable = function() {
                return this.el.find(".quiz-answers").addClass("inactive"), this.isDisabled = !0
            }, s.prototype.render = function() {
                var t;
                return t = HoganTemplates["quizzes/fill_in_the_blank"].render(this.options.answers), this.el.html(t).find("a").attr("target", "_blank"), this.el.find("input:text:first").focus()
            }, s.prototype.empty = function() {
                return this.el.empty(), this.stopListening()
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("track-trailer", t = function(t) {
            function i() {
                this.resizeCard = e(this.resizeCard, this), this.makeTrailerDivResponsive = e(this.makeTrailerDivResponsive, this), this.resetDimensions = e(this.resetDimensions, this), this.resetTrailerCard = e(this.resetTrailerCard, this), this.setMejsDimensions = e(this.setMejsDimensions, this), this.addPaddingAndPlayTrailer = e(this.addPaddingAndPlayTrailer, this), this.animateCard = e(this.animateCard, this), this.expandTrailer = e(this.expandTrailer, this), this.swapPosterAndVideo = e(this.swapPosterAndVideo, this), this.playTrailer = e(this.playTrailer, this), i.__super__.constructor.apply(this, arguments), this.player = this.el.find("video").mediaelementplayer()[0].player, this.poster = this.el.find(".trailer-still"), this.width = this.poster.width(), this.height = this.poster.height(), this.trailer = this.el.find(".trailer-video"), this.posterOverlay = this.el.find(".trailer-card-overlay"), this.isMobile = $(".mobile").length > 0, this.trailerSmall = !0, this.on("click", this.playTrailer), this.isMobile || this.el.find("video").mediaelementplayer().bind("ended", this.resetTrailerCard), this.listenTo(window, "resize", this.makeTrailerDivResponsive)
            }
            return s(i, t), i.prototype.playTrailer = function() {
                return this.isMobile ? (this.posterOverlay.toggle(), this.swapPosterAndVideo(), this.player.play()) : ($("body").animate({
                    scrollTop: this.el.offset().top - 100
                }), this.expandTrailer())
            }, i.prototype.swapPosterAndVideo = function() {
                return this.poster.toggle(), this.trailer.toggle(), this.player.hideControls()
            }, i.prototype.expandTrailer = function() {
                var t;
                return this.trailerSmall ? (this.posterOverlay.toggle(), window.innerWidth > 1050 ? this.animateCard(this.el, "200%", "200%", "-58%", t = "play") : this.addPaddingAndPlayTrailer(), this.trailerSmall = !1) : void 0
            }, i.prototype.animateCard = function(t, e, i, s, r) {
                return t.animate({
                    padding: 0,
                    width: e,
                    height: i,
                    left: s
                }, 500, function(t) {
                    return function() {
                        return "play" === r && t.addPaddingAndPlayTrailer(), "reset" === r ? t.resetDimensions() : void 0
                    }
                }(this))
            }, i.prototype.addPaddingAndPlayTrailer = function() {
                var t;
                return this.el.css("background", "#FFF"), t = this.el.width(), this.el.animate({
                    padding: 10,
                    width: t - 10
                }, 500, function(t) {
                    return function() {
                        return t.setMejsDimensions(), t.swapPosterAndVideo(), t.player.play()
                    }
                }(this))
            }, i.prototype.setMejsDimensions = function() {
                return this.el.find(".mejs-container").width(this.poster.width()), this.el.find(".mejs-container").height(this.poster.height()), this.el.find(".mejs-overlay").height("100%")
            }, i.prototype.resetTrailerCard = function() {
                var t;
                return this.swapPosterAndVideo(), window.innerWidth > 1050 ? this.animateCard(this.el, this.width, this.height, 0, t = "reset") : this.resetDimensions(), this.posterOverlay.show(), this.trailerSmall = !0
            }, i.prototype.resetDimensions = function() {
                return this.el.css({
                    background: "#000",
                    padding: "",
                    width: "",
                    height: ""
                })
            }, i.prototype.makeTrailerDivResponsive = function() {
                return this.trailerSmall === !1 ? window.innerWidth <= 1050 ? this.resizeCard() : this.resizeCard("200%", "200%", "-60%") : void 0
            }, i.prototype.resizeCard = function(t, e, i) {
                return null == t && (t = ""), null == e && (e = ""), null == i && (i = ""), this.el.css("padding", 10), this.el.width(t), this.el.height(e), this.el.css("left", i), this.el.find(".mejs-overlay").height("100%")
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.toggleSteps = e(this.toggleSteps, this), i.__super__.constructor.apply(this, arguments), this.on("click", ".toggle-steps", this.toggleSteps), this.on("pjax:end", this.clearElementsCache), this.expanded = this.get(".achievement-steps ul:visible").length > 0
            }
            return s(i, t), i.prototype.toggleSteps = function() {
                return this.expanded ? this.contract() : this.expand()
            }, i.prototype.expand = function(t) {
                return null == t && (t = "fast"), this.get(".achievement-steps ul").stop(!0, !0).slideDown(t), this.get(".toggle-steps").addClass("selected"), this.get(".toggle-steps").addClass("selected"), this.expanded = !0
            }, i.prototype.contract = function(t) {
                return null == t && (t = "fast"), this.get(".achievement-steps ul").stop(!0, !0).slideUp(t), this.get(".toggle-steps").removeClass("selected"), this.get(".toggle-steps").removeClass("selected"), this.expanded = !1
            }, i
        }(Treehouse.View), Featurette.register("expandable-content-card", t)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("truncate-tags", Treehouse.TruncateTags = function(e) {
            function s() {
                this.truncate = t(this.truncate, this), s.__super__.constructor.apply(this, arguments), this.listenTo(window, "resize", _.throttle(this.truncate, 500), {
                    triggerImmediately: !0
                })
            }
            return i(s, e), s.prototype.truncate = function() {
                return this.get(".tags").each(function() {
                    return function(t, e) {
                        var i, s, r, o, n;
                        return e = $(e), n = e.find(".truncated-tags ul"), s = e.innerWidth(), i = e.children(":not(.truncated-tags)"), n.empty(), i.show(), e.removeClass("truncated"), r = _.find(i, function(t) {
                            return t.offsetWidth + t.offsetLeft > s
                        }), r ? (o = i.slice(i.index(r), i.length + 1), o.hide(), o.clone().appendTo(n), e.addClass("truncated"), n.find("li").show()) : void 0
                    }
                }(this))
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.showErrorUpdate = e(this.showErrorUpdate, this), this.showConfirmUpdate = e(this.showConfirmUpdate, this), this.updateTrack = e(this.updateTrack, this), this.hideConfirmationCancel = e(this.hideConfirmationCancel, this), this.showConfirmationCancel = e(this.showConfirmationCancel, this), i.__super__.constructor.apply(this, arguments), this.on("click", ".decline-update", this.showConfirmationCancel), this.on("click", ".icon-close", this.hideConfirmationCancel), this.on("click", ".update-track", this.updateTrack)
            }
            return s(i, t), i.prototype.showConfirmationCancel = function() {
                return this.get(".notification-view").hide(), this.get(".confirmation-view").css("display", "block")
            }, i.prototype.hideConfirmationCancel = function() {
                return this.get(".notification-view").css("display", "block"), this.get(".confirmation-view").hide()
            }, i.prototype.updateTrack = function(t) {
                return t.preventDefault(), this.get(".achievement-hero").css("background-color", "#57636e"), this.get("span.notification-view").html("Updating..."), this.get("p.notification-view").hide(), $.ajax({
                    url: this.get(".update-track").attr("href"),
                    type: "PUT",
                    success: function(t) {
                        return function() {
                            return t.showConfirmUpdate()
                        }
                    }(this),
                    error: function(t) {
                        return function() {
                            return t.showErrorUpdate()
                        }
                    }(this)
                }), !1
            }, i.prototype.showConfirmUpdate = function() {
                return this.get(".update-card").hide(), this.get(".thanks").css("display", "block")
            }, i.prototype.showErrorUpdate = function() {
                return this.get(".icon-alert-dark-gray").hide(), this.get(".achievement-hero").css("background-color", "#ed5a5a"), this.get(".title").html("There was a problem updating your Track version."), this.get("p.notification-view").css("color", "#fff"), this.get("p.notification-view").html("Please try again, or contact support if the error persists").show()
            }, i
        }(Treehouse.View), Featurette.register("track-update-notification-actions", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.confirmAction = e(this.confirmAction, this), this.cancelAction = e(this.cancelAction, this), this.triggerAction = e(this.triggerAction, this), i.__super__.constructor.apply(this, arguments), this.on("pjax:end", _.bind(this.init, this)), this.init()
            }
            return s(i, t), i.prototype.init = function() {
                return this.clearElementsCache(), this.stopListening(), this.on("click", ".trigger-action", this.triggerAction), this.on("click", ".trigger-cancel", this.cancelAction), this.on("click", ".trigger-confirm", this.confirmAction)
            }, i.prototype.triggerAction = function(t) {
                return t.preventDefault(), this.get(".add-remove-content").show().css({
                    opacity: "1"
                })
            }, i.prototype.cancelAction = function(t) {
                return t.preventDefault(), this.get(".add-remove-content").css({
                    opacity: "0"
                }), this.el.delay(200).queue(function(t) {
                    return function() {
                        return t.get(".add-remove-content").hide(), t.el.dequeue()
                    }
                }(this))
            }, i.prototype.confirmAction = function(t) {
                return t.preventDefault(), this.el.data("remove-card-url") ? (this.removeCard(), this.get(".add-remove-content").css({
                    opacity: "0"
                }), this.el.closest("li").addClass("destroyed"), this.el.delay(500).queue(function(t) {
                    return function() {
                        return t.el.closest("li").hide(), t.el.dequeue()
                    }
                }(this))) : (this.addCard(), this.get(".add-remove-content").html("<h4>Added to Home!</h4>"), this.el.delay(1e3).queue(function(t) {
                    return function() {
                        return t.get(".add-remove-content").css({
                            opacity: "0"
                        }), t.el.closest(".lesson-card").find(".lesson-progress").removeClass("toggle-add-option"), t.el.dequeue, t.el.remove()
                    }
                }(this)))
            }, i.prototype.removeCard = function() {
                return $.ajax(this.el.data("remove-card-url"), {
                    type: "DELETE"
                })
            }, i.prototype.addCard = function() {
                return $.post(this.el.data("add-card-url"))
            }, i
        }(Treehouse.View), Featurette.register("home-card-actions", t)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        null == Treehouse.Library && (Treehouse.Library = {}), Treehouse.Library.Card = function(e) {
            function s(e) {
                this.handleBookmarkChanged = t(this.handleBookmarkChanged, this), this.bookmarkableFeaturette = t(this.bookmarkableFeaturette, this), this.identity = t(this.identity, this), this.deconstructor = t(this.deconstructor, this), s.__super__.constructor.call(this, e), this.listenTo("body", "bookmark:changed", this.handleBookmarkChanged), this.el.on("remove", this.deconstructor)
            }
            return i(s, e), s.prototype.deconstructor = function() {
                return this.stopListening()
            }, s.prototype.identity = function() {
                return this.el.attr("data-activity")
            }, s.prototype.bookmarkableFeaturette = function() {
                return Featurette.get(this.el.find("[data-featurette='bookmarkable']").attr("id"))
            }, s.prototype.handleBookmarkChanged = function(t, e, i) {
                if (e === this.identity()) {
                    if (i === Treehouse.Library.Bookmarkable.NOT_BOOKMARKED) return this.el.removeClass("bookmarked");
                    if (i === Treehouse.Library.Bookmarkable.BOOKMARKED) return this.el.addClass("bookmarked")
                }
            }, s
        }(Treehouse.View), Featurette.register("library-card", Treehouse.Library.Card)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Treehouse.Library || (Treehouse.Library = {}), Treehouse.Library.Bookmarkable = function(t) {
            function i() {
                this.trigger = e(this.trigger, this), this.handleBookmarkChanged = e(this.handleBookmarkChanged, this), this.success = e(this.success, this), this.error = e(this.error, this), this.loaded = e(this.loaded, this), this.loading = e(this.loading, this), this.sendRequest = e(this.sendRequest, this), this.unbookmark = e(this.unbookmark, this), this.bookmark = e(this.bookmark, this), this.setState = e(this.setState, this), this.isBookmarked = e(this.isBookmarked, this), this.activityId = e(this.activityId, this), i.__super__.constructor.apply(this, arguments), this.el.data("bookmarked", !1), this.on("click", "a.bookmark, a.unbookmark, .undo", this.sendRequest), this.listenTo("body", "bookmark:changed", this.handleBookmarkChanged), this.el.on("remove", this.stopListening), this.tarp = new Treehouse.Library.BookmarkableTarp(this.el.parents(".card").find(".bookmarkable-tarp"))
            }
            return s(i, t), i.BOOKMARKED = "bookmarked", i.NOT_BOOKMARKED = "not-bookmarked", i.prototype.activityId = function() {
                return this.el.data("activity") || this.el.parents("[data-activity]").data("activity")
            }, i.prototype.isBookmarked = function() {
                return this.el.data("bookmarked")
            }, i.prototype.setState = function(t) {
                return this.el.data("bookmarked", t === i.BOOKMARKED || t === !0), this.trigger("bookmark:changed")
            }, i.prototype.bookmark = function() {
                return this.isBookmarked() ? void 0 : this.el.find("a.bookmark").click()
            }, i.prototype.unbookmark = function() {
                return this.isBookmarked() ? this.el.find("a.unbookmark").click() : void 0
            }, i.prototype.sendRequest = function(t) {
                var e;
                return e = $(t.currentTarget), t.preventDefault(), $.ajax({
                    dataType: "text",
                    type: e.data("method"),
                    url: e.attr("href"),
                    beforeSend: this.loading,
                    complete: this.loaded,
                    error: this.error,
                    success: this.success
                }), !1
            }, i.prototype.loading = function() {
                return this.el.addClass("loading"), this.trigger("bookmark:change")
            }, i.prototype.loaded = function() {
                return this.el.removeClass("loading")
            }, i.prototype.error = function() {
                return this.trigger("bookmark:error"), this.tarp.displayError()
            }, i.prototype.success = function(t) {
                return this.setState(!this.isBookmarked()), _.defer(function(e) {
                    return function() {
                        return e.tarp.show(t, function() {
                            return console.log("triggering", "bookmark:" + t), e.trigger("bookmark:" + t)
                        })
                    }
                }(this))
            }, i.prototype.handleBookmarkChanged = function(t, e, s) {
                return e === this.activityId() && (s === i.NOT_BOOKMARKED && this.el.removeClass("bookmarked"), s === i.BOOKMARKED) ? this.el.addClass("bookmarked") : void 0
            }, i.prototype.trigger = function(t) {
                var e;
                return e = this.isBookmarked() === !0 ? i.BOOKMARKED : i.NOT_BOOKMARKED, this.el.trigger(t, [this.activityId(), e])
            }, i
        }(Treehouse.View), t = Treehouse.Library.Bookmarkable, Featurette.register("bookmarkable", t)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Library.BookmarkableTarp = function(e) {
            function s(e) {
                this.trigger = t(this.trigger, this), this.displayError = t(this.displayError, this), this.show = t(this.show, this), s.__super__.constructor.call(this, e)
            }
            return i(s, e), s.prototype.show = function(t, e) {
                var i;
                return this.get(".confirmation-tarp:not(.undo):visible").stop(!0, !0).fadeOut(150), this.get(".undo").is(":visible") ? this.get(".undo:visible").stop(!0, !0).delay(50).fadeOut(150, e) : (i = this.get("." + t), i.show().delay(4e3).fadeOut(300, e))
            }, s.prototype.displayError = function() {
                return this.get(".error").show()
            }, s.prototype.trigger = function(t) {
                return this.el.trigger(t)
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Treehouse.Personalization = function() {
            function e() {
                this.personalize = t(this.personalize, this), this.ajax = t(this.ajax, this), $(document).on("pjax:end personalization.load", this.ajax), $(window).on("resize", _.throttle(this.ajax, 1e3)), this.ajax()
            }
            return e.prototype.ajax = function() {
                var t, e, i, s, r;
                if (e = $(".card:visible").filter(".course, .workshop, .conference, .bonus").not("[data-no-personalization] > .card").not(".personalized"), t = this.cardIds(e), !$.isEmptyObject(t)) {
                    r = [];
                    for (s in t) i = t[s], r.push($.ajax({
                        type: "POST",
                        url: "/progress",
                        data: {
                            klass: s,
                            ids: i
                        },
                        success: this.personalize
                    }));
                    return r
                }
            }, e.prototype.cardIds = function(t) {
                return _.reduce(t, function() {
                    return function(t, e) {
                        var i, s, r;
                        return r = $(e).attr("data-activity").split("/"), s = r[0], i = r[1], s && i && (t[s] || (t[s] = []), t[s].push(parseInt(i))), t
                    }
                }(this), {})
            }, e.prototype.personalize = function(t) {
                return _.each(t, function() {
                    return function(t) {
                        var e, i, s, r, o, n, a, l;
                        if (i = $(t.selector), i.find(".estimate").html(t.formatted_time_left), n = i.find(".stages").children(), t.stage_progress_classes)
                            for (s = a = 0, l = n.length; l > a; s = ++a) o = n[s], $(o).addClass(t.stage_progress_classes[s]);
                        else t.progress_made && n.first().addClass("current");
                        return 100 === t.percent_complete ? (i.find(".tags").hide(), i.addClass("completed"), t.points_achieved && (i.find(".complete-status").removeClass("hidden"), i.find(".complete-title").prepend(t.points_achieved))) : (null != t.next_step_url || t.bookmarked) && (r = i.find(".actions .resume a"), r.text(t.progress_made ? "Resume" : "Start"), r.attr("href", t.next_step_url), "forum" !== i.data("location") && i.find(".current-step > svg").hide(), t.bookmarked && "forum" !== i.data("location") && (i.find("." + t.next_step_type + "-22-icon").show(), i.find(".current-step").append(t.next_step_title)), i.find(".current-step").removeClass("hidden"), i.find(".actions").removeClass("hidden")), t.upcoming ? i.addClass("upcoming") : t.progress_made && i.addClass("in-progress"), e = Featurette.get(i.find(".bookmarkable").attr("id")), e && e.setState(t.bookmarked), i.addClass("personalized")
                    }
                }(this))
            }, e
        }(), $(function() {
            return $("html").hasClass("logged-in") ? new Treehouse.Personalization : void 0
        })
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("form-select", Treehouse.FormSelect = function(e) {
            function s() {
                this.toggleEmptyState = t(this.toggleEmptyState, this), s.__super__.constructor.apply(this, arguments), this.options = this.el.children(), this.on("change", this.toggleEmptyState), this.el.chosen({
                    allow_single_deselect: !0,
                    display_selected_options: !1,
                    single_backstroke_delete: !1,
                    disable_search: this.el.is('[data-search="disabled"]'),
                    width: "100%"
                })
            }
            return i(s, e), s.prototype.toggleEmptyState = function() {
                var t;
                return t = this.el.val(), this.el.next().toggleClass("chosen-drop-empty", null !== t && t.length === this.options.length)
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout = function(e) {
            function s() {
                this.moveMarkupToTarget = t(this.moveMarkupToTarget, this), this.moveMarkupOnTabletBreakpoint = t(this.moveMarkupOnTabletBreakpoint, this), this.isMobile = t(this.isMobile, this), this.isTablet = t(this.isTablet, this), this.toggleScrollingStates = t(this.toggleScrollingStates, this), this.scrollTo = t(this.scrollTo, this), this.getScrollTop = t(this.getScrollTop, this), this.setScrollTop = t(this.setScrollTop, this), this.loaded = t(this.loaded, this), this.loading = t(this.loading, this), this.setVariables = t(this.setVariables, this), s.__super__.constructor.apply(this, arguments), this.window = $(window), this.document = $(document), this.elements = {}, this.elements.hero = new Treehouse.Layout.Hero(this.el.find("[data-layout-element=hero]"), this), this.listenTo(document, "scroll", this.toggleScrollingStates, {
                    triggerImmediately: !0
                }), this.listenTo(window, "resize", _.throttle(this.setVariables, 750), {
                    triggerImmediately: !0
                }), this.listenTo(window, "resize", _.throttle(this.moveMarkupOnTabletBreakpoint, 750), {
                    triggerImmediately: !0
                }), this.listenTo(window, "load", this.loaded)
            }
            return i(s, e), s.prototype.setVariables = function() {
                return this.windowWidth = this.window.width(), this.windowHeight = this.window.height(), this.documentHeight = this.document.height()
            }, s.prototype.loading = function() {
                return this.el.addClass("loading").removeClass("loaded")
            }, s.prototype.loaded = function() {
                return this.el.addClass("loaded").removeClass("loading")
            }, s.prototype.setScrollTop = function() {
                return this.scrollTop = this.document.scrollTop()
            }, s.prototype.getScrollTop = function() {
                return this.scrollTop
            }, s.prototype.scrollTo = function(t) {
                return $("html, body").animate({
                    scrollTop: t - 70,
                    600: 600
                })
            }, s.prototype.toggleScrollingStates = function() {
                return this.setScrollTop(), this.el.toggleClass("scrolling", this.getScrollTop() > 0), this.el.toggleClass("scrolling-down", (this.getScrollTop() > this.lastScrollPosition || this.getScrollTop() + this.windowHeight >= this.documentHeight) && this.getScrollTop() > 0), this.el.toggleClass("scrolling-up", this.getScrollTop() < this.lastScrollPosition && this.getScrollTop() > 0 && this.getScrollTop() + this.windowHeight < this.documentHeight), this.lastScrollPosition = this.getScrollTop()
            }, s.prototype.isTablet = function() {
                return this.windowWidth < 959
            }, s.prototype.isMobile = function() {
                return this.windowWidth < 679
            }, s.prototype.moveMarkupOnTabletBreakpoint = function() {
                return !this.movedToTarget && this.isTablet() ? (this.moveMarkupToTarget(this.get("[data-markup-move]"), this.get("[data-markup-move-target]")), this.movedToTarget = !0, this.movedToOrigin = !1, this.window.trigger("resize")) : this.movedToOrigin || !this.movedToTarget || this.isTablet() ? void 0 : (this.moveMarkupToTarget(this.get("[data-markup-move-target]"), this.get("[data-markup-move]")), this.movedToTarget = !1, this.movedToOrigin = !0, this.window.trigger("resize"))
            }, s.prototype.moveMarkupToTarget = function(t, e) {
                return e.html(t.contents().clone(!0)), t.html("")
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Hero = function(e) {
            function s(e, i) {
                this.layout = i, this.removeClass = t(this.removeClass, this), this.addClass = t(this.addClass, this), this.onVideoEnd = t(this.onVideoEnd, this), this.onVideoPause = t(this.onVideoPause, this), this.onVideoPlay = t(this.onVideoPlay, this), this.stopVideo = t(this.stopVideo, this), this.stopVideoOnEsc = t(this.stopVideoOnEsc, this), this.playVideo = t(this.playVideo, this), this.scrolling = t(this.scrolling, this), this.addBackground = t(this.addBackground, this), this.addVideoEvents = t(this.addVideoEvents, this), s.__super__.constructor.apply(this, arguments), this.el.length > 0 && (this.on("click", "[data-play-hero-video]", this.playVideo), this.on("click", "button#hero-close-video", this.stopVideo), this.listenTo(document, "scroll", _.throttle(this.scrolling, 750), {
                    triggerImmediately: !0
                }), this.listenTo(document, "keyup", this.stopVideoOnEsc), this.addBackground(), this.addVideoEvents())
            }
            return i(s, e), s.prototype.addVideoEvents = function() {
                var t;
                return t = this.get("video"), t.length > 0 ? (this.video = t.get(0), this.video.addEventListener("play", this.onVideoPlay), this.video.addEventListener("ended", this.onVideoEnd), this.video.addEventListener("pause", this.onVideoPause), this.listenTo(document, "video-playing", this.onVideoPlay), this.listenTo(document, "video-paused", this.onVideoPause), this.listenTo(document, "video-ended", this.onVideoEnd)) : void 0
            }, s.prototype.addBackground = function() {
                return this.get("img#hero-background").length > 0 && this.el.css("background-image", "url(" + this.get("img#hero-background").attr("src") + ")"), this.addClass("hero-loaded")
            }, s.prototype.scrolling = function() {
                return this.layout.el.toggleClass("scrolled-past-hero", $(document).scrollTop() > this.el.outerHeight())
            }, s.prototype.playVideo = function() {
                return this.layout.el.hasClass("ipad") ? (this.el.find(".mejs-overlay-play").click(), this.onVideoPlay()) : this.get("video").trigger("play")
            }, s.prototype.stopVideoOnEsc = function(t) {
                return 27 === t.which ? this.stopVideo() : void 0
            }, s.prototype.stopVideo = function() {
                return this.get("video").trigger("stop"), this.addClass("hero-video-stopped")
            }, s.prototype.onVideoPlay = function() {
                return this.addClass("hero-video-playing hero-video-in-progress"), this.removeClass("hero-video-played hero-video-paused hero-video-stopped")
            }, s.prototype.onVideoPause = function() {
                return this.addClass("hero-video-paused"), this.removeClass("hero-video-playing")
            }, s.prototype.onVideoEnd = function() {
                return this.addClass("hero-video-played"), this.removeClass("hero-video-playing hero-video-paused hero-video-in-progress"), this.layout.el.hasClass("ios") ? this.video.webkitExitFullScreen() : void 0
            }, s.prototype.addClass = function(t) {
                return this.el.addClass(t), this.layout.el.addClass(t)
            }, s.prototype.removeClass = function(t) {
                return this.el.removeClass(t), this.layout.el.removeClass(t)
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("treehouse-layout", Treehouse.Layout.Application = function(e) {
            function s() {
                this.expandDesktopNav = t(this.expandDesktopNav, this), this.collapseDesktopNav = t(this.collapseDesktopNav, this), this.isDesktopNavExpanded = t(this.isDesktopNavExpanded, this), this.expandMobileNav = t(this.expandMobileNav, this), this.collapseMobileNav = t(this.collapseMobileNav, this), this.isMobileNavExpanded = t(this.isMobileNavExpanded, this), this.removeContext = t(this.removeContext, this), this.addContext = t(this.addContext, this), s.__super__.constructor.apply(this, arguments), this.elements.navigation = new Treehouse.Layout.Application.Navigation(this.el.find("[data-layout-element=navigation]"), this), this.elements.breadcrumb = new Treehouse.Layout.Application.Breadcrumb(this.el.find("[data-layout-element=breadcrumb]"), this), this.elements.notifications = new Treehouse.Layout.Application.Notifications(this.el.find("[data-layout-element=notifications]"), this), this.elements.accountMenu = new Treehouse.Layout.Application.AccountMenu(this.el.find("[data-layout-element=account-menu]"), this), this.elements.container = new Treehouse.Layout.Application.Container(this.el.find("[data-layout-element=container]"), this), this.elements.stageProgress = new Treehouse.Layout.Application.StageProgress(this.el.find("[data-layout-element=stage-progress]"), this), this.elements.sidebar = new Treehouse.Layout.Application.Sidebar(this.el.find("[data-layout-element=sidebar]"), this), this.elements.controlBar = new Treehouse.Layout.Application.ControlBar(this.el.find("[data-layout-element=control-bar]"), this)
            }
            return i(s, e), s.prototype.addContext = function() {
                return this.el.cssAnimate(250).addClass("add-more-context")
            }, s.prototype.removeContext = function() {
                return this.el.cssAnimate(250).removeClass("add-more-context")
            }, s.prototype.isMobileNavExpanded = function() {
                return this.el.is(".mobile-nav-expanded")
            }, s.prototype.collapseMobileNav = function() {
                return this.isMobileNavExpanded() ? this.el.cssAnimate().removeClass("mobile-nav-expanded") : void 0
            }, s.prototype.expandMobileNav = function() {
                return this.isMobileNavExpanded() ? void 0 : this.el.cssAnimate().addClass("mobile-nav-expanded")
            }, s.prototype.isDesktopNavExpanded = function() {
                return this.el.is(".desktop-nav-expanded")
            }, s.prototype.collapseDesktopNav = function() {
                return this.el.cssAnimate().addClass("desktop-nav-collapsed").removeClass("desktop-nav-expanded"), $.removeCookie("desktop_nav_expanded")
            }, s.prototype.expandDesktopNav = function() {
                return this.el.cssAnimate().addClass("desktop-nav-expanded").removeClass("desktop-nav-collapsed"), $.cookie("desktop_nav_expanded", !0)
            }, s
        }(Treehouse.Layout))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.Navigation = function(e) {
            function s(e, i) {
                this.layout = i, this.selectPage = t(this.selectPage, this), s.__super__.constructor.apply(this, arguments), this.on("click", "li.main-page a, li.secondary-page a, li#track-progress a", this.selectPage)
            }
            return i(s, e), s.prototype.selectPage = function(t) {
                return t.metaKey || 2 === t.which ? void 0 : ($(t.currentTarget).parent().addClass("current").siblings("li.main-page, li.secondary-page").removeClass("current"), this.layout.collapseMobileNav())
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.Breadcrumb = function(e) {
            function s(e, i) {
                this.layout = i, this.scrollToTop = t(this.scrollToTop, this), this.hideSidebarShadow = t(this.hideSidebarShadow, this), this.showSidebarShadow = t(this.showSidebarShadow, this), this.showContentShadow = t(this.showContentShadow, this), this.toggleMobileNav = t(this.toggleMobileNav, this), this.goBack = t(this.goBack, this), this.updateBackButton = t(this.updateBackButton, this), this.markNotificationsRead = t(this.markNotificationsRead, this), this.updateNotificationsCount = t(this.updateNotificationsCount, this), this.getTitleAdditionOffsetBottom = t(this.getTitleAdditionOffsetBottom, this), this.getTitleAdditionBottom = t(this.getTitleAdditionBottom, this), this.getHeight = t(this.getHeight, this), this.setVariables = t(this.setVariables, this), s.__super__.constructor.apply(this, arguments), this.backButton = this.get("li#back"), this.pageTitle = this.get("li#page-title"), this.titleAddition = this.get("li#page-title-addition"), this.on("click", "li#back a", this.goBack), this.on("click", "li#mobile-nav-toggle a", this.toggleMobileNav), this.on("click", "li#page-title-addition > a", this.scrollToTop), this.listenTo(document, "scroll", this.showContentShadow, {
                    triggerImmediately: !0
                }), this.listenTo(document, "notificationCountUpdated", this.updateNotificationCount), this.listenTo(document, "markNotificationsRead", this.markNotificationsRead), this.listenTo(document, "library:updated", this.updateBackButton), this.listenTo(window, "resize", _.throttle(this.setVariables, 750), {
                    triggerImmediately: !0
                })
            }
            return i(s, e), s.prototype.setVariables = function() {
                return this.height = this.el.outerHeight(), this.titleAddition.length > 0 ? (this.titleAdditionHeight = this.titleAddition.outerHeight(), this.titleAdditionBottom = this.titleAddition.position().top + this.titleAdditionHeight, this.titleAdditionOffsetBottom = this.height + this.titleAdditionHeight) : void 0
            }, s.prototype.getHeight = function() {
                return this.height
            }, s.prototype.getTitleAdditionBottom = function() {
                return this.titleAdditionBottom
            }, s.prototype.getTitleAdditionOffsetBottom = function() {
                return this.titleAdditionOffsetBottom
            }, s.prototype.updateNotificationsCount = function(t, e) {
                return this.get("em.notifications").text(e).parent("li").toggleClass("unread", e > 0)
            }, s.prototype.markNotificationsRead = function() {
                return this.get("li#mobile-nav-toggle").removeClass("unread")
            }, s.prototype.updateBackButton = function(t, e) {
                return this.backButton.removeClass("go-home").addClass("go-back"), this.backButton.find("a").attr("href", e), this.pageTitle.removeClass("go-home").addClass("go-back"), this.pageTitle.find("h3").wrapInner('<a href="' + e + '"></a>')
            }, s.prototype.goBack = function(t) {
                return !t.metaKey && 2 !== t.which && $(t.currentTarget).parent().is(".at-home") ? !1 : void 0
            }, s.prototype.toggleMobileNav = function(t) {
                var e;
                return e = $(t.currentTarget).parent(), this.layout.isMobileNavExpanded() ? (this.layout.collapseMobileNav(), e.removeClass("current")) : (this.layout.expandMobileNav(), e.addClass("current")), !1
            }, s.prototype.showContentShadow = function() {
                return $(document).scrollTop() > 0 ? this.el.addClass("show-content-shadow") : this.el.removeClass("show-content-shadow")
            }, s.prototype.showSidebarShadow = function() {
                return this.el.addClass("show-sidebar-shadow")
            }, s.prototype.hideSidebarShadow = function() {
                return this.el.removeClass("show-sidebar-shadow")
            }, s.prototype.scrollToTop = function() {
                return $("html, body").animate({
                    scrollTop: 0
                }, 600), !1
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.AccountMenu = function(e) {
            function s(e, i) {
                this.layout = i, this.onEscKey = t(this.onEscKey, this), this.hideDropdown = t(this.hideDropdown, this), this.toggleDropdown = t(this.toggleDropdown, this), s.__super__.constructor.apply(this, arguments), this.on("click", "[data-dropdown-toggle]", this.toggleDropdown), this.listenTo(document, "click", this.hideDropdown), this.listenTo(document, "keyup", this.onEscKey)
            }
            return i(s, e), s.prototype.toggleDropdown = function(t) {
                return this.layout.isMobile() ? void 0 : (t.preventDefault(), t.stopPropagation(), $(t.currentTarget).parent("li").toggleClass("showing-dropdown").siblings().removeClass("showing-dropdown"))
            }, s.prototype.hideDropdown = function() {
                return this.get("> li").removeClass("showing-dropdown")
            }, s.prototype.onEscKey = function(t) {
                return 27 === t.keyCode ? this.hideDropdown() : void 0
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.Notifications = function(e) {
            function s(e, i) {
                this.layout = i, this.markNotificationsRead = t(this.markNotificationsRead, this), this.sendDesktopNotification = t(this.sendDesktopNotification, this), this.addNewNotification = t(this.addNewNotification, this), this.listenForNotifications = t(this.listenForNotifications, this), this.updateNotificationCount = t(this.updateNotificationCount, this), this.dropdownOpened = t(this.dropdownOpened, this), s.__super__.constructor.apply(this, arguments), this.link = this.get("> a"), this.dropdown = this.get("div#notifications-dropdown"), this.ul = this.dropdown.find("> ul"), this.count = parseInt(this.get("em.notifications").text()), this.channel = this.el.data("channel"), this.timeout = null, this.on("click", this.link, this.dropdownOpened), this.listenTo(document, "notificationCountUpdated", this.updateNotificationCount), this.listenTo(document, "markNotificationsRead", this.markNotificationsRead), this.dropdown.on("click", function() {
                    return function(t) {
                        return t.stopPropagation()
                    }
                }(this)), this.listenForNotifications(), Tinycon.setOptions({
                    colour: "#ffffff",
                    background: "#ea6c6c"
                }), Tinycon.setBubble(this.count)
            }
            return i(s, e), s.prototype.dropdownOpened = function() {
                return this.layout.isMobileNavExpanded() ? void 0 : (this.el.removeClass("unread"), $(document).trigger("markNotificationsRead"))
            }, s.prototype.updateNotificationCount = function(t, e) {
                return this.get("em.notifications").text(e).parents("li").toggleClass("unread", e > 0), Tinycon.setBubble(e)
            }, s.prototype.listenForNotifications = function() {
                return "undefined" != typeof pubnub && null !== pubnub && this.channel ? pubnub.subscribe({
                    channel: this.channel,
                    message: function(t) {
                        return function(e) {
                            return "notification" === e.name ? t.addNewNotification(e.id, e.data) : void 0
                        }
                    }(this)
                }) : void 0
            }, s.prototype.addNewNotification = function(t, e) {
                var i, s;
                return this.ensureListExists(), s = $("<li />").attr("id", "notification-" + t).addClass("unread notification").html(e), i = $("<input>").attr({
                    name: "unread[]",
                    type: "hidden"
                }).val(t), s.append(i), 0 === $(s.attr("id")).length ? (this.ul.prepend(s), this.count++, $(document).trigger("notificationCountUpdated", this.count), this.sendDesktopNotification(s)) : void 0
            }, s.prototype.ensureListExists = function() {
                return this.ul.length > 0 ? void 0 : (this.ul = $("<ul>").appendTo(this.dropdown), this.get(".empty").remove())
            }, s.prototype.sendDesktopNotification = function(t) {
                var e, i, s, r, o;
                return window.Notification && "granted" === Notification.permission ? (r = t.find("h3").first().text(), i = t.find("p.notification-message").first().text(), e = t.find("img").first().attr("src"), e.match("^http") || (e = "http:" + e), o = t.children("a").first().attr("href"), s = new Notification(r, {
                    body: i,
                    icon: e,
                    tag: t.attr("id")
                }), s.onclick = function() {
                    return function() {
                        return window.open(o), s.close()
                    }
                }(this)) : void 0
            }, s.prototype.markNotificationsRead = function() {
                var t, e;
                return this.el.removeClass("unread"), t = this.ul.find("input").serializeArray(), t.length ? (e = window.location.protocol + "//" + window.location.host + "/notifications/mark-read", $.post(e, t, function(t) {
                    return function() {
                        return t.ul.find(".notification.unread").removeClass("unread"), t.ul.find('input[name="unread[]"]').remove(), t.count = 0, $(document).trigger("notificationCountUpdated", t.count), !0
                    }
                }(this))) : void 0
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.Container = function(e) {
            function s(e, i) {
                this.layout = i, this.adjustMinHeight = t(this.adjustMinHeight, this), s.__super__.constructor.apply(this, arguments), this.on("click", this.layout.collapseMobileNav), this.listenTo(window, "resize", this.adjustMinHeight, {
                    triggerImmediately: !0
                })
            }
            return i(s, e), s.prototype.adjustMinHeight = function() {
                return this.el.css("min-height", this.layout.windowHeight - this.layout.elements.breadcrumb.getHeight())
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.StageProgress = function(e) {
            function s(e, i) {
                this.layout = i, this.onVideoEnd = t(this.onVideoEnd, this), this.onVideoTimeUpdate = t(this.onVideoTimeUpdate, this), this.onVideoPlay = t(this.onVideoPlay, this), this.cancelPageRefresh = t(this.cancelPageRefresh, this), this.setComplete = t(this.setComplete, this), this.unsetComplete = t(this.unsetComplete, this), this.updateProgress = t(this.updateProgress, this), this.toggleStepIcons = t(this.toggleStepIcons, this), this.listenToEvents = t(this.listenToEvents, this), s.__super__.constructor.apply(this, arguments), this.el.length > 0 && (this.steps = this.get("li.step"), this.stepIconWidth = 42, this.stepDotWidth = 20, this.numberOfSteps = this.steps.length, this.video = this.layout.el.find("video").get(0), this.currentStepRadial = this.get(".current svg.progress"), this.listenToEvents())
            }
            return i(s, e), s.prototype.listenToEvents = function() {
                return this.on("click", "li.current", this.cancelPageRefresh), this.listenTo(window, "resize", _.throttle(this.toggleStepIcons, 750), {
                    triggerImmediately: !0
                }), this.video ? (this.video.addEventListener("play", this.onVideoPlay), this.video.addEventListener("ended", this.onVideoEnd), this.video.addEventListener("timeupdate", _.throttle(this.onVideoTimeUpdate, 2500))) : void 0
            }, s.prototype.toggleStepIcons = function() {
                return this.el.toggleClass("show-mobile-steps", this.numberOfSteps * this.stepIconWidth > this.el.width() - 250), this.el.toggleClass("hide-dividers", this.numberOfSteps * this.stepDotWidth > this.el.width() - 200)
            }, s.prototype.updateProgress = function(t) {
                return this.radialProgress || (this.radialProgress = Featurette.get(this.currentStepRadial.attr("id"))), this.radialProgress.setProgress(t)
            }, s.prototype.unsetComplete = function() {
                return this.el.find(".current").removeClass("completed")
            }, s.prototype.setComplete = function() {
                return this.el.find(".current").addClass("completed")
            }, s.prototype.cancelPageRefresh = function(t) {
                return t.preventDefault()
            }, s.prototype.onVideoPlay = function() {
                return this.unsetComplete(), this.el.addClass("video-playing")
            }, s.prototype.onVideoTimeUpdate = function() {
                var t;
                return t = this.video.currentTime / this.video.duration * 100, this.updateProgress(t)
            }, s.prototype.onVideoEnd = function() {
                return this.el.removeClass("video-playing"), this.updateProgress(100), this.setComplete()
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.Sidebar = function(e) {
            function s(e, i) {
                this.layout = i, this.selectCurrentNavItemFromHash = t(this.selectCurrentNavItemFromHash, this), this.onHeadingClick = t(this.onHeadingClick, this), this.onNavItemClick = t(this.onNavItemClick, this), this.toggleShadow = t(this.toggleShadow, this), this.setTopPosition = t(this.setTopPosition, this), this.setHeight = t(this.setHeight, this), this.updateWindowLocation = t(this.updateWindowLocation, this), s.__super__.constructor.apply(this, arguments), this.selectCurrentNavItemFromHash(), this.listenTo(window, "resize", this.setHeight, {
                    triggerImmediately: !0
                }), this.listenTo(document, "scroll", this.setTopPosition, {
                    triggerImmediately: !0
                }), this.on("scroll", this.toggleShadow), this.on("click", "#sidebar-nav a", this.onNavItemClick), this.on("change", "select#nav-list-select", this.updateWindowLocation), this.on("click", ".form-group h4", this.onHeadingClick)
            }
            return i(s, e), s.prototype.updateWindowLocation = function(t) {
                return window.location = $(t.currentTarget).val()
            }, s.prototype.setHeight = function() {
                return this.el.css("height", $(window).height() - this.layout.elements.breadcrumb.getHeight())
            }, s.prototype.setTopPosition = function() {
                return this.el.css("top", Math.max($(document).scrollTop(), 0))
            }, s.prototype.toggleShadow = function() {
                return this.el.scrollTop() > 0 ? this.layout.elements.breadcrumb.showSidebarShadow() : this.layout.elements.breadcrumb.hideSidebarShadow()
            }, s.prototype.onNavItemClick = function(t) {
                var e;
                return !t.metaKey && 2 !== t.which && (e = $(t.currentTarget), e.parent().addClass("current").siblings().removeClass("current"), e.attr("href").search(/#/i) >= 0) ? ($("html, body").animate({
                    scrollTop: $(e.attr("href")).offset().top - this.layout.elements.breadcrumb.getHeight() - 20
                }, 600, function() {
                    return function() {
                        return window.location.hash = e.attr("href")
                    }
                }(this)), !1) : void 0
            }, s.prototype.onHeadingClick = function(t) {
                var e;
                return e = $(t.currentTarget), e.addClass("animated").toggleClass("selected"), e.siblings("ul, .form-item").slideToggle("fast", function() {
                    return e.removeClass("animated")
                })
            }, s.prototype.selectCurrentNavItemFromHash = function() {
                var t;
                return t = this.get('a[href="' + window.location.hash + '"]'), t ? t.parent("li").addClass("current") : void 0
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.Layout.Application.ControlBar = function(e) {
            function s(e, i) {
                this.layout = i, this.updateFilterLabel = t(this.updateFilterLabel, this), this.updateFilterLabels = t(this.updateFilterLabels, this), this.findDropdownMenu = t(this.findDropdownMenu, this), this.hideAllDropdowns = t(this.hideAllDropdowns, this), this.toggleDropdown = t(this.toggleDropdown, this), s.__super__.constructor.apply(this, arguments), this.container = this.get(".search-container"), this.on("click", ".dropdown-parent-label", this.toggleDropdown), this.listenTo(document, "click", this.hideAllDropdowns), this.listenTo(document, "filters:serialized", this.updateFilterLabels)
            }
            return i(s, e), s.prototype.toggleDropdown = function(t) {
                var e;
                return e = this.findDropdownMenu($(t.target)), e.is(":visible") ? e.hide() : (this.hideAllDropdowns(), e.show()), !1
            }, s.prototype.hideAllDropdowns = function() {
                return this.get(".filter-dropdown").hide()
            }, s.prototype.findDropdownMenu = function(t) {
                return t.is("a") ? t.siblings(".filter-dropdown") : t.parent().siblings(".filter-dropdown")
            }, s.prototype.updateFilterLabels = function() {
                return _.each($(".dropdown-parent-label"), this.updateFilterLabel)
            }, s.prototype.updateFilterLabel = function(t) {
                var e, i;
                return e = $(t), i = e.siblings("ul").find("li a.selected").text(), e.find(".currently-selected").text("" + i)
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.removeField = e(this.removeField, this), this.addNewField = e(this.addNewField, this), this.createNestedField = e(this.createNestedField, this), this.el = $(t), this.createNestedField("language", ".add-new-language", ".remove-language", ".profile-languages", "#language-fields-template"), this.createNestedField("award", ".add-new-award", ".remove-award", ".profile-awards", "#award-fields-template"), this.createNestedField("publication", ".add-new-publication", ".remove-publication", ".profile-publications", "#publication-fields-template")
            }
            return t.prototype.createNestedField = function(t, e, i, s, r) {
                return this.el.on("click", e, {
                    title: t,
                    templateName: r
                }, this.addNewField), this.el.on("click", i, {
                    wrapperClass: s,
                    removeLink: i
                }, this.removeField), 1 === this.el.find("" + s + ":visible").length ? this.el.find("" + s + ":visible:first " + i).hide() : void 0
            }, t.prototype.addNewField = function(t) {
                var e, i, s, r;
                return t.preventDefault(), r = this.el.find(t.data.templateName).html(), i = (new Date).getTime(), s = new RegExp("new_" + t.data.title, "g"), e = $(r.replace(s, i)), $(t.currentTarget).before(e), Treehouse.init(), e.find(":input:first").focus()
            }, t.prototype.removeField = function(t) {
                return t.preventDefault(), $(t.currentTarget).prev("input[type=hidden]").val("1"), $(t.currentTarget).closest("div").hide(), 1 === this.el.find("" + t.data.wrapperClass + ":visible").length ? this.el.find("" + t.data.wrapperClass + ":visible:first " + t.data.removeLink).hide() : void 0
            }, t
        }(), Featurette.register("accounts-form", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("analytics-click-event", t = function(t) {
            function i() {
                this.sendEvent = e(this.sendEvent, this);
                var t;
                i.__super__.constructor.apply(this, arguments), t = ["eventCategory", "eventAction", "eventLabel", "eventValue"], this.eventAttrs = _.pick(this.data, t), this.data.target ? this.on("click", this.data.target, this.sendEvent) : this.on("click", this.sendEvent)
            }
            return s(i, t), i.prototype.sendEvent = function() {
                return ga("send", "event", this.eventAttrs)
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.success = e(this.success, this), this.listener = e(this.listener, this), this.element = $(t), this.element.click(this.listener)
            }
            return t.prototype.listener = function(t) {
                var e;
                return t.preventDefault(), e = this.element.data("user-id"), $.post("" + window.location.origin + window.location.pathname + "/request_answer", {
                    user_id: e
                }, this.success)
            }, t.prototype.success = function() {
                return this.element.text("Asked").addClass("disabled").attr("disabled", "disabled")
            }, t
        }(), Featurette.register("ask-to-answer", t)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Featurette.register("async-icon", Treehouse.AsyncIcon = function() {
            function e(e) {
                this.loadingIcon = t(this.loadingIcon, this), this.loaded = t(this.loaded, this), this.loading = t(this.loading, this), this.el = $(e), this.target = $(this.el.data("target")), this.target.length > 0 && (this.target.on("loading", function(t) {
                    return function() {
                        return t.loading()
                    }
                }(this)), this.target.on("loaded", function(t) {
                    return function() {
                        return t.loaded()
                    }
                }(this)))
            }
            return e.prototype.loading = function() {
                return this.el.css("display", "none"), this.loadingIcon().css("display", "inline-block")
            }, e.prototype.loaded = function() {
                return this.el.css("display", "inline-block"), this.loadingIcon().css("display", "none")
            }, e.prototype.loadingIcon = function() {
                return this.el.siblings(this.el.data("loading-icon"))
            }, e
        }())
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("career-dashboard", t = function(t) {
            function e() {
                e.__super__.constructor.apply(this, arguments), this.on("change", ".looking-toggle input", function() {
                    return $.ajax({
                        type: "POST",
                        data: $(this).parents("form").serialize()
                    })
                })
            }
            return i(e, t), e
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.removeField = e(this.removeField, this), this.addNewField = e(this.addNewField, this), this.createNestedField = e(this.createNestedField, this), this.el = $(t), this.form = new StandardForm(t), this.createNestedField("work_history_item", ".add-new-experience", ".remove-experience", ".experience", "#work-history-item-fields-template"), this.createNestedField("education_history_item", ".add-new-education", ".remove-education", ".education", "#education-history-item-fields-template"), this.el.on("change", ".current input", function() {
                    return function(t) {
                        var e, i, s, r, o, n;
                        for (e = $(t.target).closest(".experience").find(".end-date"), e.find(".form-element").toggleClass("disabled", t.target.checked), o = e.find("select"), n = [], s = 0, r = o.length; r > s; s++) i = o[s], t.target.checked && ($("option", i).attr("selected", !1), $("option:first", i).attr("selected", !0)), n.push($(i).attr("disabled", t.target.checked).change().blur());
                        return n
                    }
                }(this)), this.el.find(".current input").change()
            }
            return t.prototype.createNestedField = function(t, e, i, s, r) {
                return this.resetRemoveButtons(s, i), this.el.on("click", e, {
                    title: t,
                    templateName: r
                }, function(t) {
                    return function(e) {
                        return t.addNewField(e), t.resetRemoveButtons(s, i)
                    }
                }(this)), this.el.on("click", i, {
                    wrapperClass: s,
                    removeLink: i
                }, function(t) {
                    return function(e) {
                        return t.removeField(e), t.resetRemoveButtons(s, i)
                    }
                }(this))
            }, t.prototype.addNewField = function(t) {
                var e, i, s, r;
                return t.preventDefault(), r = this.el.find(t.data.templateName).html(), i = (new Date).getTime(), s = new RegExp("new_" + t.data.title, "g"), e = $(r.replace(s, i)), $(t.currentTarget).before(e), Treehouse.init(), e.find(":input:first").focus()
            }, t.prototype.removeField = function(t) {
                return t.preventDefault(), $(t.currentTarget).prev("input[type=hidden]").val("1"), $(t.currentTarget).closest(t.data.wrapperClass).hide()
            }, t.prototype.resetRemoveButtons = function(t, e) {
                return 1 === this.el.find("" + t + ":visible").length ? this.el.find("" + t + ":visible:first " + e).hide() : this.el.find("" + t + ":visible " + e).show()
            }, t
        }(), Featurette.register("career-profile-form", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i(t) {
                var s, r, o, n, a;
                this.el = t, this.updateCurrentStepClass = e(this.updateCurrentStepClass, this), this.prevStep = e(this.prevStep, this), this.nextStep = e(this.nextStep, this), this.handleKeyEvent = e(this.handleKeyEvent, this), this.indicatorClicked = e(this.indicatorClicked, this), this.hashStep = e(this.hashStep, this), this.onHashChange = e(this.onHashChange, this), this.onWizardClosed = e(this.onWizardClosed, this), this.onWizardOpened = e(this.onWizardOpened, this), this.id = this.el.id, i.__super__.constructor.apply(this, arguments), this.allowCycle = null != (s = this.el.data("wizard-cycle")) ? s : !1, this.transitionSpeed = null != (r = this.el.data("wizard-transition-speed")) ? r : 300, this.enableArrowKeys = null != (o = this.el.data("wizard-enable-arrow-keys")) ? o : !1, this.updateLocationHash = null != (n = this.el.data("wizard-update-location-hash")) ? n : !1, this.ignoreTotalSteps = null != (a = this.el.data("wizard-ignore-total-steps")) ? a : !1, this.steps = this.el.find(".step"), this.stepIndicators = this.el.find(".step-indicator"), this.document = $(document), this.totalSteps = this.steps.length, this.initialStep = this.el.data("wizard-initial-step") || 1, this.currentStep = this.hashStep(), this.history = [], this.on("click", ".next-step:not(.disabled)", this.nextStep), this.on("click", ".prev-step:not(.disabled)", this.prevStep), this.on("click", ".step-indicator", this.indicatorClicked), this.enableArrowKeys && this.on("keydown", this.handleKeyEvent), this.listenTo(document, "wizard-opened", this.onWizardOpened), this.listenTo(document, "wizard-closed", this.onWizardClosed), this.updateLocationHash && $(window).on("hashchange", this.onHashChange), this.advanceStep(this.currentStep)
            }
            return s(i, t), i.prototype.onWizardOpened = function() {}, i.prototype.onWizardClosed = function() {
                return this.currentStep = this.initialStep, this.advanceStep(this.currentStep)
            }, i.prototype.onHashChange = function() {
                var t;
                return location.hash !== "#step-" + this.currentStep ? (t = this.hashStep(), this.advanceStep(t)) : void 0
            }, i.prototype.hashStep = function() {
                var t;
                return t = location.hash.match(/^#step-(\d+)$/), t ? parseInt(t[1]) : this.initialStep
            }, i.prototype.indicatorClicked = function(t) {
                var e;
                return null != (null != t ? t.currentTarget : void 0) ? (e = $(t.currentTarget).data("step-indicator-step"), null != e && this.advanceStep(e), t.preventDefault()) : void 0
            }, i.prototype.handleKeyEvent = function(t) {
                if (!this.el.find("input, textarea").is(":focus")) switch (t.keyCode) {
                    case 37:
                        return this.prevStep();
                    case 39:
                        return this.nextStep()
                }
            }, i.prototype.nextStep = function(t) {
                var e, i;
                return e = null != (i = $(null != t ? t.currentTarget : void 0).data("step")) ? i : this.currentStep + 1, this.advanceStep(e), this.document.trigger("wizard-next-step"), null != t && t.preventDefault(), e
            }, i.prototype.prevStep = function(t) {
                var e, i;
                return e = null != (i = $(null != t ? t.currentTarget : void 0).data("step")) ? i : this.currentStep - 1, this.advanceStep(e), this.document.trigger("wizard-previous-step"), null != t && t.preventDefault(), e
            }, i.prototype.advanceStep = function(t) {
                var e;
                return e = this.currentStep, this.ignoreTotalSteps ? this.currentStep = t : (this.allowCycle || t >= 1 && t <= this.totalSteps) && (this.currentStep = t % this.totalSteps || this.totalSteps), this.currentStep === e ? (this.steps.filter(".step-" + this.currentStep).is(":visible") || (this.steps.hide(), this.steps.filter(".step-" + this.currentStep).show()), this.updateCurrentStepClass()) : this.steps.filter(".current-wizard-step").fadeOut(this.transitionSpeed, function(t) {
                    return function() {
                        return t.get(".step-" + t.currentStep).fadeIn(t.transitionSpeed), t.updateCurrentStepClass()
                    }
                }(this)), this.updateLocationHash && (location.hash = "#step-" + this.currentStep), "function" == typeof this.onStepChanged ? this.onStepChanged() : void 0
            }, i.prototype.updateCurrentStepClass = function() {
                return this.steps.removeClass("current-wizard-step"), this.stepIndicators.removeClass("current-wizard-step"), this.get(".step-" + this.currentStep + ", .step-indicator-" + this.currentStep).addClass("current-wizard-step")
            }, i
        }(Treehouse.View), window.Wizard = t, Featurette.register("wizard", t)
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("career-survey", t = function(t) {
            function e(t) {
                e.__super__.constructor.call(this, t), this.on("click", ".survey-options[data-type=checkbox] [data-value]", function(t) {
                    return function(e) {
                        return $(e.currentTarget).find("> a").toggleClass("checked"), t.updateStepAvailability()
                    }
                }(this)), this.on("click", ".survey-options[data-type=radio] [data-value]", function(t) {
                    return function(e) {
                        var i;
                        return i = $(e.currentTarget).parents(".survey-options"), i.find("li > a").removeClass("checked"), $(e.currentTarget).find("> a").addClass("checked"), t.updateStepAvailability()
                    }
                }(this)), this.el.find(".survey-options[data-type=sortable]").each(function(t, e) {
                    return e = $(e), e.sortable({
                        axis: "y",
                        containment: e.parents(".survey-wizard-container"),
                        revert: 150,
                        zIndex: 1,
                        change: function(t, i) {
                            return e.find("> *").not(i.helper).each(function(t, e) {
                                var s;
                                return s = e === i.placeholder[0] ? i.helper : e, $(".rank", s).text(t + 1)
                            })
                        }
                    })
                })
            }
            return i(e, t), e.prototype.onStepChanged = function() {
                var t, e;
                return $("html,body").animate({
                    scrollTop: 0
                }, this.transitionSpeed), e = this.get(".step-" + this.currentStep).height(), this.get(".steps-container").animate({
                    height: e
                }, {
                    duration: this.transitionSpeed,
                    complete: function(t) {
                        return function() {
                            return t.get(".steps-container").css({
                                height: "auto"
                            })
                        }
                    }(this)
                }), t = this.el.find(".step-2 [data-value=part_time] > a").is(".checked"), $(".step-2-part_time").toggle(t), this.updateStepAvailability(), this.currentStep === this.totalSteps ? this.save() : void 0
            }, e.prototype.updateStepAvailability = function() {
                var t, e, i;
                return i = this.get(".step-" + this.currentStep), e = i.find(".survey-options"), t = "sortable" !== e.data("type") && 0 === e.find("[data-value] > a.checked").length, this.get(".survey-actions .next-step").toggleClass("disabled", t), this.get(".survey-actions .grid-50:first-child").toggleClass("hidden", 1 === this.currentStep), this.get(".survey-actions .grid-50:nth-child(2)").toggleClass("grid-100", 1 === this.currentStep), this.get(".survey-actions .next-step").toggleClass("hidden", this.currentStep === this.totalSteps), this.get(".survey-actions .finish").toggleClass("hidden", this.currentStep !== this.totalSteps)
            }, e.prototype.save = function() {
                var t, e;
                return e = function(t) {
                    return function(e, i) {
                        return _(e).extend(t.serializeStep(i))
                    }
                }(this), t = {
                    survey: _(this.steps).reduce(e, {})
                }, $.ajax("/career/survey", {
                    data: t,
                    type: "PUT"
                })
            }, e.prototype.serializeStep = function(t) {
                var e, i, s, r, o, n, a, l, h, u, c, d, p, f, g;
                for (n = {}, f = $(t).find(".survey-options"), l = 0, c = f.length; c > l; l++)
                    if (r = f[l], r = $(r), s = r.find("[data-value]"), g = [r.data("type"), r.data("param")], a = g[0], o = g[1], "checkbox" === a)
                        for (h = 0, d = s.length; d > h; h++) i = s[h], n[$(i).data("value")] = $(i).find("> a").is(".checked");
                    else if ("radio" === a) n[o] = s.filter(":has(> a.checked)").data("value");
                else if ("sortable" === a)
                    for (e = u = 0, p = s.length; p > u; e = ++u) i = s[e], n[$(i).data("value")] = s.length - 1 - e;
                return n
            }, e
        }(Wizard))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("circle-progress", Treehouse.CircleProgress = function(e) {
            function s() {
                this.setProgress = t(this.setProgress, this), s.__super__.constructor.apply(this, arguments), this.progress = this.el.data("progress"), this.circumference = this.el.width() * Math.PI, this.progressBars = this.get(".base-overlay, .progress"), this.setProgress(this.progress)
            }
            return i(s, e), s.prototype.setProgress = function(t) {
                return this.progress = t, this.progressBars.attr("stroke-dashoffset", ((100 - this.progress) / 100 * this.circumference).toFixed(3) + "px")
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        this.CodeChallenge || (this.CodeChallenge = {}), CodeChallenge.Base = function() {
            function e(e) {
                var i, s, r, o, n;
                for (this.el = e, this.acceptIncomingMessage = t(this.acceptIncomingMessage, this), this.handleEngineError = t(this.handleEngineError, this), this.handleEngineStatusUpdate = t(this.handleEngineStatusUpdate, this), this.handleEngineEvent = t(this.handleEngineEvent, this), this.handleTimeoutError = t(this.handleTimeoutError, this), this.refresh = t(this.refresh, this), this.checkWork = t(this.checkWork, this), this.submit = t(this.submit, this), this.goToTask = t(this.goToTask, this), this.toggleScrollStates = t(this.toggleScrollStates, this), this.setVariables = t(this.setVariables, this), this.el = $(this.el), i = this.el.data("challenge"), this.tasks = i.tasks, this.currentTask = 0, this.lastTaskPassed = 0, this.timeoutDelay = 1.25 * i.timeout * 1e3, this.timeoutPath = this.el.data("timeout-path"), this.timeoutId = null, this.isAdminPreview = i.admin_preview, this.layout = Featurette.get("layout"), this.breadcrumb = this.layout.elements.breadcrumb, this.workspace = new CodeChallenge.WorkspaceView(this.el.find(".cc-workspace")), this.instructions = new CodeChallenge.InstructionView(this.el.find("#instructions"), this.tasks, this.el.data("badge-url"), this.layout, this.breadcrumb), this.feedback = new CodeChallenge.FeedbackView(this.el.find("#feedback"), this.checkWork, this.refresh, this.goToTask, this.layout, this.breadcrumb), this.results = new CodeChallenge.ResultsView(this.el.find(".cc-results")), this.codeChallengeSessionUUID = i.uuid, this.submitter = new CodeChallenge.Submitter(this.el.data("submit-path"), this.codeChallengeSessionUUID), this.engineListener = new CodeChallenge.EngineListener(this.codeChallengeSessionUUID, this.acceptIncomingMessage, {
                        event: this.handleEngineEvent,
                        engine_update: this.handleEngineStatusUpdate,
                        engine_error: this.handleEngineError,
                        connect: function(t) {
                            return function() {
                                return i.no_preview ? void 0 : t.refresh()
                            }
                        }(this)
                    }), this.boxHeader = this.el.find("div.box-header"), this.boxActions = this.el.find("div.box-actions"), this.boxFooter = this.el.find("div.box-footer"), this.layout.window.on("resize", this.setVariables).on("resize", this.toggleScrollStates).trigger("resize"), this.layout.document.on("resetVariables", this.setVariables).on("scroll", this.toggleScrollStates).trigger("scroll"), this.layout.document.bind("keydown", "ctrl+return", this.checkWork), this.layout.document.bind("keydown", "alt+r", this.refresh), this.layout.document.on("click", ".show-results-button", this.refresh), n = this.workspace.editors, r = 0, o = n.length; o > r; r++) s = n[r], s.codeMirror.addKeyMap({
                    "Ctrl-Enter": this.checkWork
                }), s.codeMirror.addKeyMap({
                    "Alt-R": this.refresh
                });
                this.goToTask(1), i.no_preview && this.feedback.hidePreviewButton()
            }
            return e.prototype.setVariables = function() {
                return this.breadcrumbHeight = this.breadcrumb.getHeight(), this.boxClone = this.breadcrumb.titleAddition.find("div.mixed-box"), this.boxCloneBottom = this.breadcrumb.getHeight() + this.boxClone.outerHeight(), this.boxFooterTop = this.boxFooter.offset().top, this.boxHeaderBottom = this.boxHeader.offset().top + this.boxHeader.outerHeight(), this.boxActionsBottom = this.boxActions.offset().top + this.boxActions.outerHeight()
            }, e.prototype.toggleScrollStates = function() {
                return this.layout.el.toggleClass("scrolled-past-box-footer", this.layout.getScrollTop() >= this.boxFooterTop - this.boxCloneBottom), this.layout.el.toggleClass("scrolled-past-actions", !this.layout.isMobile() && this.layout.getScrollTop() >= this.boxActionsBottom - this.boxCloneBottom), this.layout.el.toggleClass("scrolled-past-instructions", this.layout.isMobile() && this.layout.getScrollTop() >= this.boxHeaderBottom - this.boxCloneBottom)
            }, e.prototype.goToTask = function(t) {
                var e;
                return this.currentTask = t, e = Math.max(t, this.lastTaskPassed), this.instructions.update(t), this.feedback["default"](e)
            }, e.prototype.submit = function(t) {
                var e;
                return null == t && (t = !1), e = this.listenForMessages(), this.submitter.submit(e, this.currentTask, t, {
                    files: this.workspace.getFiles()
                }), this.timeoutId = setTimeout(this.handleTimeoutError, this.timeoutDelay)
            }, e.prototype.checkWork = function() {
                return this.feedback.canCheckWork() ? (this.feedback.disableCheckWork(), this.feedback.disableRefresh(), this.submit()) : void 0
            }, e.prototype.refresh = function() {
                return this.feedback.canRefresh() ? (this.feedback.disableRefresh(), this.feedback.disableCheckWork(), this.submit(!0)) : void 0
            }, e.prototype.handleTimeoutError = function() {
                return this.rejectMessages(), $.post(this.timeoutPath, {
                    uuid: this.codeChallengeSessionUUID
                }), this.genericErrorMessage("There was a communication problem."), this.feedback.resetButtons()
            }, e.prototype.handleEngineEvent = function(t) {
                return this.rejectMessages(), t.pass ? t.task === this.tasks.length ? (Treehouse.PointsCounter.updateTotal(), this.feedback.finished(), this.isAdminPreview !== !0 && this.completeChallenge()) : (t.task > this.lastTaskPassed && (this.lastTaskPassed = t.task), this.feedback.correct(t.feedback, t.task + 1)) : t.pass === !1 && (t.task <= this.lastTaskPassed && t.task !== this.currentTask ? this.feedback.inactiveTaskFailed(t.task, t.up_to) : (this.feedback.showWorkspace(), this.feedback.wrong(t.feedback, t.up_to))), clearTimeout(this.timeoutId), this.results.update(t), this.feedback.resetButtons()
            }, e.prototype.handleEngineStatusUpdate = function(t) {
                var e;
                return e = "run" === t.target ? this.feedback.updatePreviewButton(t.text) : this.feedback.updateTestButton(t.text)
            }, e.prototype.handleEngineError = function(t) {
                return clearTimeout(this.timeoutId), this.genericErrorMessage(t.message || "")
            }, e.prototype.listenForMessages = function() {
                return null == this.messageId && (this.messageId = 0), null == this.totalMessages && (this.totalMessages = 0), this.totalMessages += 1, this.messageId = this.totalMessages
            }, e.prototype.acceptIncomingMessage = function(t) {
                return parseInt(t.message_id, 10) === this.messageId
            }, e.prototype.rejectMessages = function() {
                return this.messageId = null
            }, e.prototype.completeChallenge = function() {
                return $.ajax({
                    type: "POST",
                    url: this.el.data("completed-path"),
                    data: {
                        _method: "PUT",
                        uuid: this.codeChallengeSessionUUID
                    },
                    success: function() {
                        return function(t) {
                            return "Badge awarded!" !== t.message ? Featurette.get("challenge-completed-modal").showOverlay() : (Featurette.get("badge-modal").showOverlay(), t.track_completed === !0 ? ($("#badge-awarded-footer").hide(), $("#track-completed-footer").show()) : void 0)
                        }
                    }(this),
                    error: function(t) {
                        return function(e, i, s) {
                            return t.genericErrorMessage(s)
                        }
                    }(this)
                })
            }, e.prototype.genericErrorMessage = function(t) {
                var e;
                return e = Featurette.get("code-challenge-error-modal"), e.setError(t), e.showOverlay({
                    stack: !0
                })
            }, e
        }(), Featurette.register("code-challenge", CodeChallenge.Base)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        this.CodeChallenge || (this.CodeChallenge = {}), CodeChallenge.CommandChallenge = function() {
            function e(e) {
                var i;
                this.el = e, this.acceptIncomingMessage = t(this.acceptIncomingMessage, this), this.acceptIncomingMessage = t(this.acceptIncomingMessage, this), this.retryCurrentTask = t(this.retryCurrentTask, this), this.goToNextTask = t(this.goToNextTask, this), this.handleEngineError = t(this.handleEngineError, this), this.handleEngineEvent = t(this.handleEngineEvent, this), this.handleTimeoutError = t(this.handleTimeoutError, this), this.submit = t(this.submit, this), this.el = $(this.el), i = this.el.data("challenge"), this.isAdminPreview = i.admin_preview, this.codeChallengeSessionUUID = i.uuid, this.tasks = i.tasks, this.currentTask = 1, this.lastTaskPassed = 0, this.previousCommand = "", this.timeoutDelay = 1.25 * i.timeout * 1e3, this.timeoutPath = this.el.data("timeout-path"), this.timeoutId = null, this.badgeUrl = this.el.data("badge-url"), this.addViewForCurrentTask(), this.engineListener = new CodeChallenge.EngineListener(this.codeChallengeSessionUUID, this.acceptIncomingMessage, {
                    event: this.handleEngineEvent,
                    engine_error: this.handleEngineError
                }), this.submitter = new CodeChallenge.Submitter(this.el.data("submit-path"), this.codeChallengeSessionUUID)
            }
            return e.prototype.submit = function(t, e) {
                var i;
                return this.previousCommand = e, i = this.listenForMessages(), this.submitter.submit(i, t, !1, {
                    command: e
                }), this.timeoutId = setTimeout(this.handleTimeoutError, this.timeoutDelay)
            }, e.prototype.handleTimeoutError = function() {
                return this.rejectMessages(), $.post(this.timeoutPath, {
                    uuid: this.codeChallengeSessionUUID
                }), this.genericErrorMessage("There was a communication problem.")
            }, e.prototype.handleEngineEvent = function(t) {
                var e;
                return this.rejectMessages(), t.pass ? t.task === this.tasks.length ? this.isAdminPreview !== !0 && this.completeChallenge() : (this.lastTaskPassed = t.task, this.taskView.correct(t.feedback), $(".cc-goto").click(function(t) {
                    return function() {
                        return t.goToNextTask()
                    }
                }(this))) : (this.taskView.wrong(t.feedback), $(".cc-test").click(function(t) {
                    return function() {
                        return t.retryCurrentTask()
                    }
                }(this))), Treehouse.init(), this.taskView.displayResults(null != (e = t.preview_urls) ? e[0] : void 0), clearTimeout(this.timeoutId)
            }, e.prototype.handleEngineError = function(t) {
                return clearTimeout(this.timeoutId), this.genericErrorMessage(t.message || "")
            }, e.prototype.goToNextTask = function() {
                return this.taskView.hideResults(this.lastTaskPassed, $(".hide-results")), this.previousCommand = "", $(".cc-goto").remove(), this.currentTask = this.lastTaskPassed + 1, this.addViewForCurrentTask()
            }, e.prototype.retryCurrentTask = function() {
                return $("#" + this.el.attr("id") + " .task_view").last().remove(), this.addViewForCurrentTask()
            }, e.prototype.listenForMessages = function() {
                return null == this.messageId && (this.messageId = 0), null == this.totalMessages && (this.totalMessages = 0), this.totalMessages += 1, this.messageId = this.totalMessages
            }, e.prototype.addViewForCurrentTask = function() {
                return this.taskView = new CodeChallenge.CommandTaskView(this.el, this.tasks[this.currentTask - 1], this.currentTask, this.previousCommand, this.tasks.length, this.submit, this.badgeUrl)
            }, e.prototype.acceptIncomingMessage = function() {}, e.prototype.acceptIncomingMessage = function(t) {
                return parseInt(t.message_id, 10) === this.messageId
            }, e.prototype.rejectMessages = function() {
                return this.messageId = null
            }, e.prototype.completeChallenge = function() {
                return $.ajax({
                    type: "POST",
                    url: this.el.data("completed-path"),
                    data: {
                        _method: "PUT",
                        uuid: this.codeChallengeSessionUUID
                    },
                    success: function() {
                        return function(t) {
                            return "Badge awarded!" === t.message ? Featurette.get("badge-modal").showOverlay() : Featurette.get("challenge-completed-modal").showOverlay()
                        }
                    }(this),
                    error: function(t) {
                        return function(e, i, s) {
                            return t.genericErrorMessage(s)
                        }
                    }(this)
                })
            }, e.prototype.genericErrorMessage = function(t) {
                var e;
                return null == t && (t = "There was an error."), e = Featurette.get("code-challenge-error-modal"), e.setError(t), e.showOverlay()
            }, e
        }(), Featurette.register("command-challenge", CodeChallenge.CommandChallenge)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.EngineListener = function() {
            function e(e, i, s) {
                this.acceptIncoming = i, this.callbacks = s, this.fireEvent = t(this.fireEvent, this), pubnub.subscribe({
                    channel: e,
                    connect: this.callbacks.connect,
                    message: this.fireEvent
                })
            }
            return e.prototype.fireEvent = function(t) {
                return this.acceptIncoming && this.callbacks[t.name] ? this.callbacks[t.name](t.data) : void 0
            }, e
        }()
    }.call(this),
    function() {
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.Submitter = function() {
            function t(t, e) {
                this.url = t, this.uuid = e
            }
            return t.prototype.submit = function(t, e, i, s) {
                var r;
                return r = {
                    uuid: this.uuid,
                    code_challenge_submission: {
                        message_id: t,
                        task: e,
                        preview: i ? !0 : !1,
                        submission: s
                    }
                }, $.ajax({
                    type: "POST",
                    url: this.url,
                    data: JSON.stringify(r),
                    contentType: "application/json"
                })
            }, t
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.CommandTaskView = function() {
            function e(e, i, s, r, o, n, a) {
                this.el = e, this.taskData = i, this.currentTask = s, this.previousCommand = r, this.totalTasks = o, this.submitForTestingCallback = n, this.badgeUrl = a, this.hideResults = t(this.hideResults, this), this.displayResults = t(this.displayResults, this), this.wrong = t(this.wrong, this), this.correct = t(this.correct, this), this.disableOtherTaskEntries = t(this.disableOtherTaskEntries, this), this.addNewTaskEntry = t(this.addNewTaskEntry, this), this.addLayoutState = t(this.addLayoutState, this), this.el = $(this.el), this.addLayoutState(), this.addNewTaskEntry()
            }
            return e.prototype.addLayoutState = function() {
                return this.layout = Featurette.get("layout"), this.layout.el.addClass("command-challenge")
            }, e.prototype.addNewTaskEntry = function() {
                var t, e, i, s;
                return this.disableOtherTaskEntries(), t = {
                    taskData: this.taskData,
                    currentTask: this.currentTask,
                    totalTasks: this.totalTasks,
                    badgeUrl: this.badgeUrl
                }, this.el.append(HoganTemplates["code_challenges/command_task"].render(t)), s = $("#" + this.el.attr("id") + " .task_view .terminal").last(), e = "> ", i = function(t) {
                    return function() {
                        var i;
                        return "" !== t.editor.getValue() ? (i = t.editor.getValue().slice(e.length), t.submitForTestingCallback(t.currentTask, i), t.editor.setOption("readOnly", "nocursor"), t.el.find(".terminal").html("Checking your answer...")) : void 0
                    }
                }(this), this.editor = CodeMirror(s[0], {
                    mode: "text",
                    lineWrapping: !0,
                    value: e + this.previousCommand,
                    extraKeys: {
                        Enter: i
                    }
                }), this.editor.markText({
                    line: 0,
                    ch: 0
                }, {
                    line: 0,
                    ch: 2
                }, {
                    inclusiveLeft: !0,
                    atomic: !0
                }), $("html, body").animate({
                    scrollTop: s.closest(".task_view").offset().top - 100
                }, 400), this.editor.focus(), this.editor.setCursor({
                    line: 0
                })
            }, e.prototype.disableOtherTaskEntries = function() {
                return this.el.children(".task_view").addClass("inactive")
            }, e.prototype.correct = function(t) {
                var e;
                return e = $("#" + this.el.attr("id") + " .task_view #feedback").last(), e.addClass("box-actions icons-only alert success").removeClass("error").html(HoganTemplates["code_challenges/command_feedback_correct"].render({
                    feedback: t,
                    alert_success_icon: this.el.data("alert-success-icon")
                }))
            }, e.prototype.wrong = function(t) {
                var e;
                return e = $("#" + this.el.attr("id") + " .task_view #feedback").last(), e.addClass("box-actions icons-only alert error").html(HoganTemplates["code_challenges/command_feedback_wrong"].render({
                    feedback: t,
                    alert_error_icon: this.el.data("alert-error-icon")
                }))
            }, e.prototype.displayResults = function(t) {
                var e, i;
                if (void 0 !== t && null !== t) return e = {
                    currentTask: this.currentTask,
                    url: t
                }, this.el.find("div.box-content").last().html(HoganTemplates["code_challenges/command_results"].render(e)), i = $(".hide-results").last(), i.click(function(t) {
                    return function() {
                        var s;
                        return s = e.currentTask, t.hideResults(s, i)
                    }
                }(this))
            }, e.prototype.hideResults = function(t, e) {
                return $("#results-" + t).hide(), e.addClass("show-results"), e.removeClass("hide-results"), e.html("Show Results"), e.click(function(i) {
                    return function() {
                        return $("#results-" + t).show(), e.addClass("hide-results"), e.removeClass("show-results"), e.html("Hide Results"), e.click(function() {
                            return i.hideResults(t, e)
                        })
                    }
                }(this))
            }, e
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.EditorView = function() {
            function e(e, i, s) {
                this.submitForTestingCallback = i, this.submitForPreviewCallback = s, this.refresh = t(this.refresh, this), this.handleCursorMove = t(this.handleCursorMove, this), this.codeMirror = CodeMirror.fromTextArea(e, {
                    mode: $(e).data("editor-mode"),
                    tabSize: 2,
                    lineNumbers: !0,
                    theme: "solarized dark",
                    viewportMargin: 30,
                    extraKeys: {
                        Tab: CodeMirror.commands.insertSoftTab
                    }
                }), this.codeMirror.on("cursorActivity", this.handleCursorMove), $(".CodeMirror").ready(this.refresh)
            }
            return e.prototype.handleCursorMove = function() {
                var t, e;
                return e = this.highlightedLine, t = this.codeMirror.getCursor().line, e && this.codeMirror.removeLineClass(e, "background", "CodeMirror-activeline-background"), this.highlightedLine = this.codeMirror.addLineClass(t, "background", "CodeMirror-activeline-background")
            }, e.prototype.getValue = function() {
                return this.codeMirror.getValue()
            }, e.prototype.refresh = function() {
                return this.codeMirror.refresh()
            }, e
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.FeedbackView = function() {
            function e(e, i, s, r, o, n) {
                this.el = e, this.submitForTestingCallback = i, this.submitForPreviewCallback = s, this.goToTaskCallback = r, this.layout = o, this.breadcrumb = n, this.showWorkspace = t(this.showWorkspace, this), this.showResults = t(this.showResults, this), this.disableRefresh = t(this.disableRefresh, this), this.disableCheckWork = t(this.disableCheckWork, this), this.currentTask = t(this.currentTask, this), this.cloneToBreadcrumb = t(this.cloneToBreadcrumb, this), this.getIcon = t(this.getIcon, this), this.goToTask = t(this.goToTask, this), this.testButtonHandler = t(this.testButtonHandler, this), this.previewButtonHandler = t(this.previewButtonHandler, this), this.el = $(this.el), this.boxClone = this.breadcrumb.titleAddition.find("div.mixed-box"), this.el.on("click", ".cc-test", this.testButtonHandler), this.el.on("click", ".cc-preview", this.previewButtonHandler), this.el.on("click", ".cc-goto", this.goToTask), this.el.on("click", ".show-results-button", this.showResults), this.el.on("click", ".show-workspace-button", this.showWorkspace)
            }
            return e.prototype.previewButtonHandler = function(t) {
                return t.preventDefault(), this.submitForPreviewCallback()
            }, e.prototype.testButtonHandler = function(t) {
                return t.preventDefault(), this.submitForTestingCallback()
            }, e.prototype.goToTask = function(t) {
                var e, i;
                return t.preventDefault(), e = $(t.target), e.hasClass("disabled") ? void 0 : (i = e.data("task"), this.goToTaskCallback(i))
            }, e.prototype.generateFeedback = function(t, e) {
                return null == e && (e = {}), e.info = this.getIcon("info"), e.preview = this.getIcon("preview"), e.editor = this.getIcon("editor"), e.next = this.getIcon("next"), e.alert_info_icon = this.getIcon("alert-info"), e.alert_error_icon = this.getIcon("alert-error"), e.alert_success_icon = this.getIcon("alert-success"), HoganTemplates["code_challenges/feedback_" + t].render(e)
            }, e.prototype.getIcon = function(t) {
                var e;
                return e = this.el.data("" + t + "-icon"), $("html").hasClass("ie") ? e.replace(/xlink:href="(.*)(#.*)"/, 'xlink:href="$2"') : e
            }, e.prototype.cloneToBreadcrumb = function() {
                return Treehouse.init(), this.boxClone.find("div.box-actions").remove(), this.boxClone.append(this.el.clone(!0)), this.layout.document.trigger("resetVariables")
            }, e.prototype["default"] = function(t) {
                return this.el.addClass("info").removeClass("success").html(this.generateFeedback("neutral", {
                    task: t
                })), this.cloneToBreadcrumb()
            }, e.prototype.canCheckWork = function() {
                return !this.el.find(".cc-test").hasClass("disabled")
            }, e.prototype.canRefresh = function() {
                return !this.el.find(".cc-preview").hasClass("disabled")
            }, e.prototype.correct = function(t, e) {
                return this.el.addClass("success").removeClass("error info").html(this.generateFeedback("correct", {
                    feedback: t,
                    nextTask: e
                })), this.cloneToBreadcrumb()
            }, e.prototype.currentTask = function() {
                return this.el.find(".cc-test").data("task")
            }, e.prototype.disableCheckWork = function() {
                return this.el.find(".cc-test").addClass("disabled"), this.updateTestButton("Working...")
            }, e.prototype.disableRefresh = function() {
                return this.el.find(".cc-preview").addClass("disabled"), this.updatePreviewButton("Working...")
            }, e.prototype.finished = function() {
                return this.el.addClass("success").removeClass("error info").html(this.generateFeedback("finished")), this.cloneToBreadcrumb()
            }, e.prototype.wrong = function(t, e) {
                return this.el.addClass("error").removeClass("success info").html(this.generateFeedback("wrong", {
                    feedback: t,
                    failedTask: e
                })), this.cloneToBreadcrumb()
            }, e.prototype.hidePreviewButton = function() {
                return this.el.find(".show-results-button").addClass("hidden")
            }, e.prototype.inactiveTaskFailed = function(t, e) {
                var i;
                return i = {
                    failedTaskAsWord: this.numberToWord(t),
                    failedTask: t,
                    currentTask: e
                }, this.el.addClass("error").removeClass("success info").html(this.generateFeedback("inactive_task_failed", i)), this.cloneToBreadcrumb()
            }, e.prototype.numberToWord = function(t) {
                var e;
                return e = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"], 11 > t ? e[t] : "#" + t
            }, e.prototype.resetButtons = function() {
                var t, e;
                return t = this.el.find(".cc-test"), t.text(t.data("default-text")), e = this.el.find(".cc-preview"), e.text(e.data("default-text")), $(".cc-test, .cc-preview").removeClass("disabled")
            }, e.prototype.showResults = function() {
                return this.el.find(".cc-preview").removeClass("hidden"), $(".show-results-button").addClass("hidden"), $(".show-workspace-button").removeClass("hidden"), $(".workspace").addClass("hidden"), $(".cc-results").removeClass("hidden")
            }, e.prototype.showWorkspace = function() {
                return this.el.find(".cc-preview").addClass("hidden"), $(".show-results-button").removeClass("hidden"), $(".show-workspace-button").addClass("hidden"), $(".workspace").removeClass("hidden"), $(".cc-results").addClass("hidden")
            }, e.prototype.updateTestButton = function(t) {
                return this.el.find(".cc-test").text(t)
            }, e.prototype.updatePreviewButton = function(t) {
                return this.el.find(".cc-preview").text(t)
            }, e
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.InstructionView = function() {
            function e(e, i, s, r, o) {
                this.el = e, this.taskInstructions = i, this.badgeImageUrl = s, this.layout = r, this.breadcrumb = o, this.scrollToTop = t(this.scrollToTop, this), this.el = $(this.el), this.titleAddition = this.breadcrumb.titleAddition.find("div.mixed-box"), this.el.on("click", this.scrollToTop)
            }
            return e.prototype.scrollToTop = function() {
                return this.layout.isMobile() ? $("html, body").animate({
                    scrollTop: this.el.offset().top - this.breadcrumb.getHeight()
                }, 600) : void 0
            }, e.prototype.update = function(t) {
                var e;
                return e = {
                    task: t,
                    body: this.taskInstructions[t - 1].body,
                    totalTasks: this.taskInstructions.length,
                    badgeImageUrl: this.badgeImageUrl
                }, this.el.html(HoganTemplates["code_challenges/instructions"].render(e)), this.titleAddition.html(this.el.clone(!0)), this.layout.document.trigger("resetVariables")
            }, e
        }()
    }.call(this),
    function() {
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.PreviewView = function() {
            function t(t) {
                this.el = t, this.el = $(this.el)
            }
            return t.prototype.update = function(t) {
                return this.el.find("iframe").attr("src", t)
            }, t
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.ResultsView = function() {
            function e(e) {
                this.el = e, this.update = t(this.update, this), this.handleMenuClick = t(this.handleMenuClick, this), this.initializePreview = t(this.initializePreview, this), this.el.find(".cc-preview-view").each(this.initializePreview), this.el.on("click", ".cc-results-menu a", this.handleMenuClick), this.el.find(".cc-results-menu .selected").click()
            }
            return e.prototype.initializePreview = function(t, e) {
                return this.previews || (this.previews = {}), this.previews[$(e).data("source")] = new CodeChallenge.PreviewView(e)
            }, e.prototype.handleMenuClick = function(t) {
                var e, i;
                return t.preventDefault(), i = $(t.target), this.el.find(".cc-results-menu .selected").removeClass("selected"), i.addClass("selected"), e = this.el.find(".cc-results-menu a").index(i), this.el.find(".preview.selected").removeClass("selected"), this.el.find(".preview").eq(e).addClass("selected")
            }, e.prototype.update = function(t) {
                var e, i, s, r, o;
                r = this.previews, o = [];
                for (e in r) i = r[e], o.push(t.preview_urls ? function() {
                    var r, o, n, a;
                    for (n = t.preview_urls, a = [], r = 0, o = n.length; o > r; r++) s = n[r], new RegExp("/" + e + "$").test(s) && a.push(i.update(s));
                    return a
                }() : void 0);
                return o
            }, e
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.WorkspaceView = function() {
            function e(e, i, s) {
                this.el = e, this.submitForTestingCallback = i, this.submitForPreviewCallback = s, this.handleMenuClick = t(this.handleMenuClick, this), this.initializeEditor = t(this.initializeEditor, this), this.el.find(".editor textarea").each(this.initializeEditor), this.el.on("click", ".cc-editor-menu a", this.handleMenuClick), this.el.find(".cc-editor-menu .selected").click()
            }
            return e.prototype.initializeEditor = function(t, e) {
                return this.editors || (this.editors = []), this.editors.push(new CodeChallenge.EditorView(e, this.submitForTestingCallback, this.submitForPreviewCallback))
            }, e.prototype.handleMenuClick = function(t) {
                var e, i;
                return t.preventDefault(), i = $(t.target), this.el.find(".cc-editor-menu .selected").removeClass("selected"), i.addClass("selected"), e = this.el.find(".cc-editor-menu a").index(i), this.el.find(".editor.selected").removeClass("selected"), this.el.find(".editor").eq(e).addClass("selected"), this.editors[e].codeMirror.refresh()
            }, e.prototype.getFiles = function() {
                return $.map(this.editors, function(t) {
                    return function(e, i) {
                        var s, r;
                        return r = t.el.find(".cc-editor-menu a").eq(i).text(), s = e.getValue(), {
                            source: r,
                            content: s
                        }
                    }
                }(this))
            }, e
        }()
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.toggleCompletedCards = e(this.toggleCompletedCards, this), this.element = $(t), this.toggle = $("div[data-featurette='expandable-content-card'].completed"), this.icon = this.element.find(".icon"), this.text = this.element.find(".toggle-text"), this.element.on("click", this.toggleCompletedCards)
            }
            return t.prototype.toggleCompletedCards = function() {
                return "Hide" === this.text.html() ? this.contract() : this.expand()
            }, t.prototype.expand = function() {
                return this.toggle.removeClass("hidden"), this.text.html("Hide"), this.icon.removeClass("icon-chevron-down").addClass("icon-chevron-up")
            }, t.prototype.contract = function() {
                return this.toggle.addClass("hidden"), this.text.html("Show"), this.icon.removeClass("icon-chevron-up").addClass("icon-chevron-down")
            }, t
        }(), Featurette.register("completed-card-toggle", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                return this.playVideo = e(this.playVideo, this), this.closeOverlay = e(this.closeOverlay, this), i.__super__.constructor.apply(this, arguments)
            }
            return s(i, t), i.prototype.closeOverlay = function() {
                var t;
                return i.__super__.closeOverlay.apply(this, arguments), t = Featurette.get(this.el.find("video.featurette").attr("id")), t.reset()
            }, i.prototype.playVideo = function() {
                return this.el.find("video").trigger("play")
            }, i
        }(Treehouse.Modal), Featurette.register("course-trailer-modal", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.onSubmit = e(this.onSubmit, this), i.__super__.constructor.apply(this, arguments), this.el.on("submit", this.onSubmit)
            }
            return s(i, t), i.prototype.onSubmit = function(t) {
                var e, i;
                return t.preventDefault(), e = t.currentTarget, null != (i = Featurette.get("layout")) && i.loading(), $.ajax({
                    url: e.action,
                    type: e.method,
                    data: this.el.serialize(),
                    success: function() {
                        return function() {
                            return location.reload()
                        }
                    }(this),
                    error: function(t) {
                        return function(e) {
                            var i;
                            return t.el.html(e.responseText), Treehouse.init(), null != (i = Featurette.get("layout")) ? i.loaded() : void 0
                        }
                    }(this)
                })
            }, i
        }(Treehouse.View), Featurette.register("department-form", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                var e, i;
                i = $(t), e = i.siblings("#department_user_id"), i.autocomplete({
                    minLengh: 3,
                    source: this.membersSource,
                    open: function() {
                        return t = $(this).autocomplete("widget"), t.css({
                            top: parseFloat(t.css("top")) - 4,
                            "z-index": 50001
                        })
                    },
                    focus: function(t, e) {
                        return t.preventDefault(), this.value = e.item.label
                    },
                    select: function(t, s) {
                        return t.preventDefault(), i.val(s.item.label), e.val(s.item.value)
                    }
                })
            }
            return t.prototype.membersSource = function(t, e) {
                return $.ajax({
                    url: this.element.data("autocomplete-url"),
                    data: {
                        q: t.term
                    },
                    dataType: "json",
                    success: e
                })
            }, t
        }(), Featurette.register("department-member-autocomplete", t)
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        t = function(t) {
            function e(t) {
                e.__super__.constructor.apply(this, arguments), this.on("change", function(e, i) {
                    return "Add a department..." === i.selected ? window.location = $(t).data("departments-path") : void 0
                })
            }
            return i(e, t), e
        }(Treehouse.FormSelect), Featurette.register("department-select", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.resize = e(this.resize, this), this.dropdown = $(t), this.dropdown.wrap("<span class='drop-down-container' />"), this.wrapper = this.dropdown.parent(), this.dropdown.chosen({
                    no_results_text: "No results for",
                    allow_single_deselect: !0
                }), this.button = this.wrapper.find(".chzn-single"), this.center(), void 0 !== this.dropdown.data("autocomplete-url") ? (this.dropdown.data("existing", this.dropdown.html()), this.autocomplete()) : this.wrapper.find(".chzn-search").hide(), $(document).on("liszt:updated", this.resize), this.dropdown.on("change", this.resize), this.resize()
            }
            return t.prototype.resize = function() {
                return this.button.parent().removeAttr("style"), this.center()
            }, t.prototype.center = function() {
                var t, e, i;
                return t = this.wrapper.width(), e = this.wrapper.find(".chzn-drop").width(), i = t / 2 - e / 2, this.wrapper.find(".chzn-drop").css("margin-left", i)
            }, t.prototype.autocomplete = function() {
                return this.input = this.wrapper.find(".chzn-search input"), this.input.autocomplete({
                    delay: 500,
                    minLength: 5,
                    source: function(t) {
                        return function(e, i) {
                            return $.ajax({
                                url: t.dropdown.data("autocomplete-url"),
                                data: {
                                    q: t.input.val()
                                },
                                dataType: "json",
                                beforeSend: function() {
                                    return t.wrapper.find("ul.chzn-results, select").empty()
                                },
                                success: function(s) {
                                    var r;
                                    return t.addExisting(), r = _.each(s, function(i) {
                                        return t.dropdown.append("<option>" + i + "</option>"), t.dropdown.trigger("liszt:updated"), t.input.val(e.term)
                                    }), i(r)
                                }
                            })
                        }
                    }(this)
                })
            }, t.prototype.addExisting = function() {
                return this.dropdown.prepend(this.dropdown.data("existing")), this.dropdown.trigger("liszt:updated")
            }, t
        }(), Featurette.register("drop-down", t)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.EditBillingForm = function(e) {
            function s() {
                this.setupCardTokenizer = t(this.setupCardTokenizer, this), this.finalizeForm = t(this.finalizeForm, this), this.onFormSubmit = t(this.onFormSubmit, this), this.togglePaymentMethod = t(this.togglePaymentMethod, this), s.__super__.constructor.apply(this, arguments), this.on("change", "input[name='payment_method']", this.togglePaymentMethod), this.on("submit", this.onFormSubmit), this.togglePaymentMethod(), this.setupCardTokenizer()
            }
            return i(s, e), s.prototype.togglePaymentMethod = function() {
                switch (this.paymentMethod = this.get("input[name='payment_method']").filter(":checked").val(), this.paymentMethod) {
                    case "paypal":
                        return this.get(".bitcoin-chosen").hide(), this.get(".credit-card-chosen").hide(), this.get(".paypal-chosen").show();
                    case "credit_card":
                        return this.get(".paypal-chosen").hide(), this.get(".bitcoin-chosen").hide(), this.get(".credit-card-chosen").show();
                    case "bitcoin":
                        return this.get(".paypal-chosen").hide(), this.get(".credit-card-chosen").hide(), this.get(".bitcoin-chosen").show()
                }
            }, s.prototype.onFormSubmit = function(t) {
                return t.preventDefault(), t.stopPropagation(), "credit_card" === this.paymentMethod ? this.cardTokenizer.tokenizeCard(this.get("#credit_card_number").val(), this.get("#credit_card_month").val(), this.get("#credit_card_year").val(), this.get("#credit_card_cvv").val()) : this.finalizeForm()
            }, s.prototype.finalizeForm = function() {
                return this.get("#credit_card_number").val(""), this.get("#credit_card_cvv").val(""), this.el.get(0).submit()
            }, s.prototype.setupCardTokenizer = function() {
                var t;
                return t = this.el.data("tokenizer-config"), this.cardTokenizer = new Treehouse.CreditCardTokenizer(this.el.get(0).id, {
                    client_token: t.client_token,
                    merchant_id: t.merchant_id,
                    environment: BraintreeData.environments[t.environment]
                }, this.finalizeForm)
            }, s
        }(Treehouse.View), Featurette.register("edit-billing-form", Treehouse.EditBillingForm)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.listener = e(this.listener, this), this.init = e(this.init, this), i.__super__.constructor.apply(this, arguments), this.filters = "a[data-filter-value]", this.el.on("filter-list:updated", this.init), this.el.trigger("filter-list:updated"), this.initialValue()
            }
            return s(i, t), i.prototype.init = function() {
                return this.get(this.filters).off("click", this.listener).on("click", this.listener)
            }, i.prototype.initialValue = function() {
                var t;
                return (t = Treehouse.queryString()[this.el.attr("id")]) && this.val(t.replace(/\+/g, " ")), void 0 === this.val() ? this.val("") : void 0
            }, i.prototype.listener = function(t) {
                var e;
                return t.preventDefault(), e = $(t.target), this.val(e.data("filter-value"))
            }, i.prototype.val = function(t, e) {
                var i;
                return null == e && (e = !0), void 0 === t ? this.get(this.filters).filter(".selected").first().data("filter-value") : (this.get(this.filters).removeClass("selected"), i = this.get(this.filters).filter("[data-filter-value='" + t + "']"), 1 === i.length && i.addClass("selected"), this.get("[data-filter-list-current-value]").html(i.html()), e ? this.el.trigger("change") : void 0)
            }, i
        }(Treehouse.View), Featurette.register("filter-list", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("filter-tag", t = function(t) {
            function i() {
                this.render = e(this.render, this), this.callback = e(this.callback, this), i.__super__.constructor.apply(this, arguments), $(document).on("click", "[data-filter-tag]", this.render), $(document).on("filter:deserialized", this.callback)
            }
            return s(i, t), i.prototype.callback = function(t, e) {
                var i;
                return i = $("[data-filter-list-val='" + e + "'][data-filter-tag]"), i.length ? this.render({
                    target: i
                }) : void 0
            }, i.prototype.render = function(t) {
                var e;
                return e = $(t.target), this.el.html("" === e.data("filter-tag") ? null : _.template(this.template, {
                    type: e.data("filter-tag-type"),
                    title: e.data("filter-tag-title"),
                    contentTitle: e.data("filter-tag-content-title")
                }))
            }, i.prototype.template = '<div class="form-group" id="<%= type %>-tagged-content">\n  <input type="hidden" id="<%= type %>_id" />\n  <h4><a><%= title %> <span class="icon icon-chevron-down"></span></a></a></h4>\n  <ul class="filter-list" id="content-tag" data-featurette="filter-list">\n    <li>\n      <strong class="selected">\n        <a class="filter-content-tag">\n          <span class="icon icon-close-dark" data-filter-tag="" data-filter-list-val="<%= type %>:"></span>\n        </a>\n        <span class="icon icon-video-small content-icon"></span>\n        <span class=\'content-title\'><%= contentTitle %></span>\n      </strong>\n    </li>\n  </ul>\n</div>', i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i(t) {
                this.removeEmptyCategories = e(this.removeEmptyCategories, this), this.populateTemplateGroup = e(this.populateTemplateGroup, this), this.populateForkedWorkspaceSelect = e(this.populateForkedWorkspaceSelect, this), this.resetTemplateSelect = e(this.resetTemplateSelect, this), this.filterTemplates = e(this.filterTemplates, this), this.id = t.id, i.__super__.constructor.apply(this, arguments), this.forkedWorkspaceSelect = $("select#workspace_forked_workspace_id"), this.imageSelect = $("#image_id"), this.el.on("change", this.filterTemplates), this.populateForkedWorkspaceSelect()
            }
            return s(i, t), i.prototype.filterTemplates = function() {
                var t;
                return this.resetTemplateSelect(), t = $("#image_id").val(), "" !== t && (this.forkedWorkspaceSelect.find("option[data-image-id!='" + t + "']").remove(), this.removeEmptyCategories()), this.forkedWorkspaceSelect.trigger("change")
            }, i.prototype.resetTemplateSelect = function() {
                return this.forkedWorkspaceSelect.empty(), this.populateForkedWorkspaceSelect()
            }, i.prototype.populateForkedWorkspaceSelect = function() {
                var t, e, i;
                t = {
                    "Content Templates": this.forkedWorkspaceSelect.data("content-templates"),
                    Templates: this.forkedWorkspaceSelect.data("starter-templates"),
                    "Your Workspaces": this.forkedWorkspaceSelect.data("user-workspaces")
                };
                for (e in t) i = t[e], this.populateTemplateGroup(e, i);
                return this.removeEmptyCategories()
            }, i.prototype.populateTemplateGroup = function(t, e) {
                var i, s, r, o, n, a;
                for (s = $("<optgroup label='" + t + "'></optgroup>"), this.forkedWorkspaceSelect.append(s), a = [], o = 0, n = e.length; n > o; o++) r = e[o], i = $("<option value='" + r.id + "' data-image-id='" + r.image_id + "'></option>"), i.text(r.title), a.push(s.append(i));
                return a
            }, i.prototype.removeEmptyCategories = function() {
                return this.forkedWorkspaceSelect.find("optgroup:empty").remove()
            }, i
        }(Treehouse.View), Featurette.register("filter-workspace-templates", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.error = e(this.error, this), this.success = e(this.success, this), this.listener = e(this.listener, this), i.__super__.constructor.apply(this, arguments), this.on("click", this.listener)
            }
            return s(i, t), i.prototype.listener = function(t) {
                var e;
                return t.stopPropagation(), t.preventDefault(), this.el.attr("disabled", "disabled"), e = $.post(this.el.prop("href"), {
                    _method: this.data.method
                }), e.success(this.success), e.fail(this.error)
            }, i.prototype.success = function() {
                return this.el.removeAttr("disabled"), "not-following" === this.data.status ? (this.el.html(this.data.unfollowHtml).addClass("button-secondary").attr("href", this.data.unfollowUrl), this.data.status = "following", this.data.method = "delete") : (this.el.html(this.data.followHtml).removeClass("button-secondary").attr("href", this.data.followUrl), this.data.status = "not-following", this.data.method = "put")
            }, i.prototype.error = function() {
                return this.el.removeAttr("disabled"), alert("Doh! There was a problem with your request. Try again.")
            }, i
        }(Treehouse.View), Featurette.register("follow", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.success = e(this.success, this), this.dismissAnswerRequest = e(this.dismissAnswerRequest, this), this.$el = $(t), this.post = this.$el.closest(".sticky-post"), this.post_link = this.post.find(".discussion-meta h2 a"), this.post_link.size() ? (this.view = "index", this.post_slug_url = this.post_link.prop("href")) : (this.view = "show", this.post_slug_url = window.location.pathname), this.$el.click(this.dismissAnswerRequest)
            }
            return t.prototype.dismissAnswerRequest = function() {
                return $.post("" + this.post_slug_url + "/dismiss_request", {}, this.success)
            }, t.prototype.success = function() {
                return "index" === this.view ? $("#sort a.selected").click() : this.$el.parent().hide()
            }, t
        }(), Featurette.register("forum-answer-request-dismissal", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.loadMobileAnswerForm = e(this.loadMobileAnswerForm, this), this.dismissAnswer = e(this.dismissAnswer, this), i.__super__.constructor.apply(this, arguments), this.on("click", "[data-cancel-forum-answer]", this.dismissAnswer), this.$mobileButtons = this.el.closest(".discussion-mobile-buttons"), this.$mobileAddAnswerButton = this.$mobileButtons.find("#discussion-answer-post-alt"), this.$mobileAddAnswerButton.on("click", this.loadMobileAnswerForm)
            }
            return s(i, t), i.prototype.dismissAnswer = function(t) {
                return t.stopPropagation(), t.preventDefault(), this.el.hide(), this.$mobileAddAnswerButton.show()
            }, i.prototype.loadMobileAnswerForm = function(t) {
                return t.preventDefault(), this.$mobileButtons.find(".discussion-answer-post").show(), this.$mobileAddAnswerButton.hide()
            }, i
        }(Treehouse.View), Featurette.register("forum-answering", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.cancelNewComment = e(this.cancelNewComment, this), this.showNewComment = e(this.showNewComment, this), this.$el = $(t), this.id = this.$el.data("item-id"), this.type = this.$el.data("item-type"), this.$newEl = $("#new-" + this.type + "-comment-" + this.id), this.$cancelEl = $("#cancel-new-" + this.type + "-comment-" + this.id), this.$followButton = $("a[data-featurette='follow']"), this.$mobileDiscussionButtons = $(".discussion-mobile-buttons"), this.$editForumPost = $(".edit_forum_post"), this.$el.click(this.showNewComment), this.$cancelEl.click(this.cancelNewComment)
            }
            return t.prototype.showNewComment = function(t) {
                return t.preventDefault(), "post" === this.type && this.$followButton.hide(), this.$mobileDiscussionButtons.hide(), this.$mobileDiscussionButtons.find(".discussion-answer-post").hide(), this.$newEl.show()
            }, t.prototype.cancelNewComment = function(t) {
                return t.preventDefault(), this.$newEl.hide().find("textarea").val(""), this.$mobileDiscussionButtons.show(), this.$mobileDiscussionButtons.find("#discussion-answer-post-alt").show(), this.$editForumPost.is(":visible") ? void 0 : this.$followButton.show()
            }, t
        }(), Featurette.register("forum-commenting", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.$el = $(t), this.id = this.$el.data("item-id"), this.type = this.$el.data("item-type"), this.$showEl = $("#show-" + this.type + "-" + this.id), this.$editEl = $("#edit-" + this.type + "-" + this.id), this.$cancelEl = $("#cancel-edit-" + this.type + "-" + this.id), this.$followButton = $("a[data-featurette='follow']"), this.$el.click(function(t) {
                    return function() {
                        return t.previousValue = t.$editEl.find(".new-discussion textarea").val(), t.$showEl.hide(), t.$editEl.show(), "post" === t.type ? t.$followButton.hide() : void 0
                    }
                }(this)), this.$cancelEl.click(function(t) {
                    return function(e) {
                        return e.preventDefault(), t.$editEl.hide(), t.$showEl.show(), t.$editEl.find(".new-discussion textarea").val(t.previousValue), t.$followButton.show()
                    }
                }(this))
            }
            return t
        }(), Featurette.register("forum-editing", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.setPopoverOffset = e(this.setPopoverOffset, this), this.hideDropdown = e(this.hideDropdown, this), this.listener = e(this.listener, this), i.__super__.constructor.apply(this, arguments), this.listenTo(document, "click", this.hideDropdown), this.$discussionTools = $(".discussion-tools"), this.layout = Featurette.get("layout"), this.popover = this.get(".popover"), this.toggle = this.get(".popover-toggle"), this.on("click", "[data-popover-toggle]", this.listener)
            }
            return s(i, t), i.prototype.listener = function() {
                return this.setPopoverOffset(), this.popover.toggle(), this.toggle.toggleClass("selected")
            }, i.prototype.hideDropdown = function(t) {
                var e;
                return e = $(t.target).closest(".discussion-tools"), this.$discussionTools.not(e).find(".popover").hide().end().find(".popover-toggle").removeClass("selected"), e.length ? void 0 : this.el.find(".popover").hide().end().find(".popover-toggle").removeClass("selected")
            }, i.prototype.setPopoverOffset = function() {
                return this.layout.isMobile() && "comment" !== this.el.data("item-type") ? this.popover.removeClass("popover-offset-right").addClass("popover-offset-left") : this.popover.removeClass("popover-offset-left").addClass("popover-offset-right")
            }, i
        }(Treehouse.View), Featurette.register("forum-moderation-tools", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("forum-post-preview", t = function(t) {
            function i(t) {
                this.reset = e(this.reset, this), this.togglePreviewButton = e(this.togglePreviewButton, this), this.error = e(this.error, this), this.success = e(this.success, this), this.listener = e(this.listener, this), i.__super__.constructor.apply(this, arguments), this.$el = $(t), this.$formitem = this.$el.closest(".form-item"), this.$textarea = this.$formitem.find("textarea"), this.$mentions = this.$formitem.find(".mentions"), this.$preview = this.$formitem.find(".forum-preview"), this.$attachedCode = this.$el.closest("form").find("#attached_code"), this.$tooltip = this.$el.find(".tooltip strong"), this.on("click", this.listener), this.$textarea.on("input", this.togglePreviewButton)
            }
            return s(i, t), i.prototype.listener = function(t) {
                var e, i;
                return t.preventDefault(), this.$textarea.focus(), this.$el.toggleClass("selected"), this.$formitem.find("label").focus(), this.$el.hasClass("selected") ? (this.$tooltip.text("Compose"), e = this.$textarea.val(), this.$el.closest("form").find("#attach_code").is(":checked") && (e = "" + this.$textarea.val() + "\n\n" + this.$attachedCode.val()), i = $.post("/forum/preview", {
                    post_body: e
                }), i.success(this.success), i.fail(this.error)) : (this.$tooltip.text("Preview"), this.$preview.hide(), this.$textarea.show(), this.$textarea.focus())
            }, i.prototype.success = function(t) {
                return this.$preview.html(t.html), this.$preview.show(), this.$mentions.hide(), this.$textarea.hide()
            }, i.prototype.error = function() {
                return alert("There was a problem generating a preview. Please try again."), this.$preview.html(""), this.$mentions.show(), this.$textarea.show()
            }, i.prototype.togglePreviewButton = function(t) {
                return t.preventDefault(), "" === this.$textarea.val() ? this.$el.fadeOut() : this.$el.fadeIn()
            }, i.prototype.reset = function() {
                return this.$preview.html("").hide(), this.$textarea.show(), this.$tooltip.text("Preview"), this.$el.removeClass("selected")
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.findAttachedCode = e(this.findAttachedCode, this), this.toggleAttachedCode = e(this.toggleAttachedCode, this), this.searchForSimilarPosts = e(this.searchForSimilarPosts, this), this.pollQuestions = e(this.pollQuestions, this), this.syncQuestion = e(this.syncQuestion, this), this.nextStep = e(this.nextStep, this), this.onWizardClosed = e(this.onWizardClosed, this), this.onWizardOpened = e(this.onWizardOpened, this), i.__super__.constructor.apply(this, arguments), this.titles = ["Ask a Question", "Is your question unique?", "Add question details"], this.title = this.el.closest(".contained").find("h1"), this.noResults = this.el.find(".no-existing-questions"), this.questionsContainer = this.el.find(".suggested-questions ul"), this.postBody = this.el.find("#forum_post_body"), this.attachedCode = this.el.find("#attached_code"), this.attachedFiles = this.el.find(".code-attachments"), this.has_errors = !1, this.transitionSpeed = 0, this.steps.filter(".step-2").find('[name="forum_post[subject]"]').on("keyup", _.throttle(this.pollQuestions, 2e3)), this.el.find("#attach_code").on("change", this.toggleAttachedCode), this.steps.find("textarea").on("change, blur, keyup", $.proxy(this.validate, this)), this.steps.find("select").on("change", $.proxy(this.validate, this))
            }
            return s(i, t), i.prototype.onWizardOpened = function() {
                return this.currentStepPage = this.steps.filter(".step-" + this.currentStep), this.setStepTitle(), this.clearFields(), this.validate(), this.findAttachedCode()
            }, i.prototype.onWizardClosed = function() {
                return i.__super__.onWizardClosed.apply(this, arguments), this.clearFields(), this.question = ""
            }, i.prototype.nextStep = function() {
                return i.__super__.nextStep.apply(this, arguments), this.currentStepPage = this.steps.filter(".step-" + this.currentStep), this.syncQuestion(), this.setStepTitle(), this.validate()
            }, i.prototype.clearFields = function() {
                return this.el.find("textarea").val("").blur(), Featurette.get("forum-post-preview").reset()
            }, i.prototype.syncQuestion = function() {
                return this.question = this.currentStepPage.prev().find('[name="forum_post[subject]"]').val(), this.steps.find('[name="forum_post[subject]"]').val(this.question).blur(), 2 === this.currentStep && this.searchForSimilarPosts(), this.steps.find('[name="forum_post[subject]"]:visible').trigger("autosize.resize")
            }, i.prototype.pollQuestions = function() {
                var t;
                return t = this.question, this.question = this.currentStepPage.find('[name="forum_post[subject]"]').val().trim(), t !== this.question && "" !== this.question ? this.searchForSimilarPosts() : void 0
            }, i.prototype.validate = function() {
                var t, e, i;
                return t = this.currentStepPage.find("textarea"), e = this.el, i = !1, t.each(function() {
                    return "" === this.value.trim() ? i = !0 : void 0
                }), 3 === this.currentStep && "Choose a topic..." === this.currentStepPage.find("select option:selected").text() && (i = !0), this.has_errors = i, this.has_errors ? e.find("button.button-primary").attr("disabled", !0).addClass("inactive disabled") : this.resetErrors(), !0
            }, i.prototype.resetErrors = function() {
                return this.currentStepPage.find(".error-message").remove(), this.currentStepPage.find("button").attr("disabled", !1).removeClass("inactive disabled"), this.has_errors = !1, !0
            }, i.prototype.setStepTitle = function() {
                return this.title.text(this.titles[this.currentStep - 1])
            }, i.prototype.searchForSimilarPosts = function() {
                return $.ajax({
                    url: "" + window.location.origin + "/forum/suggested_posts",
                    data: {
                        q: this.question
                    },
                    dataType: "json",
                    success: function(t) {
                        return function(e) {
                            return t.questionsContainer.empty(), "" === e.html.trim() ? (t.noResults.show(), t.questionsContainer.hide()) : (t.noResults.hide(), t.questionsContainer.show().append(e.html))
                        }
                    }(this)
                })
            }, i.prototype.toggleAttachedCode = function() {
                return this.attachedFiles.toggle()
            }, i.prototype.findAttachedCode = function() {
                var t, e, i, s, r, o, n, a;
                if (t = "", null != Featurette.get("code-challenge") && (r = Featurette.get("code-challenge").workspace))
                    for (a = r.editors, o = 0, n = a.length; n > o; o++) e = a[o], s = $(e.codeMirror.getTextArea()), i = s.data("file"), this.attachedFiles.empty(), this.attachedFiles.append("<div class='file'><span class='icon icon-doc'></span>" + i + "</div>"), t += "\n\n```" + i + "\n" + e.getValue() + "\n```";
                return this.attachedCode.val(t)
            }, i
        }(Wizard), window.ForumPostWizard = t, Featurette.register("forum-post-wizard", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.updateVotingCount = e(this.updateVotingCount, this), this.vote = e(this.vote, this), this.selectBest = e(this.selectBest, this), this.$el = $(t), this.id = this.$el.data("answer-id"), this.cancelVoteUrl = this.$el.data("cancel-vote-url"), this.$answerWrap = this.$el.find(".discussion-highlight"), this.$bestEl = this.$el.find(".vote-best-answer"), this.$upvoteEl = this.$el.find(".vote-up"), this.$downvoteEl = this.$el.find(".vote-down"), this.$bestEl.find("a").click(this.selectBest), this.$upvoteEl.find("a").click(this.vote), this.$downvoteEl.find("a").click(this.vote)
            }
            return t.prototype.selectBest = function(t) {
                var e, i;
                return t.preventDefault(), i = this.$bestEl.find("a").data("url"), this.$answerWrap.hasClass("discussion-answer-best") ? (e = this.$answerWrap, this.$answerWrap.removeClass("discussion-answer-best"), this.$bestEl.addClass("selected")) : (e = $(".discussion-answer-best"), e.removeClass("discussion-answer-best"), e.find(".vote-best-answer").addClass("selected"), this.$answerWrap.addClass("discussion-answer-best"), this.$bestEl.removeClass("selected")), $.ajax({
                    url: i,
                    type: "POST",
                    error: function(t) {
                        return function() {
                            return t.$answerWrap.removeClass("discussion-answer-best"), t.$bestEl.addClass("selected"), e.addClass("discussion-answer-best"), e.find(".vote-best-answer").removeClass("selected"), alert("There was a problem marking the answer as best.")
                        }
                    }(this)
                })
            }, t.prototype.vote = function(t) {
                var e, i, s, r, o, n, a, l, h, u, c, d;
                return t.preventDefault(), e = $(t.currentTarget), l = this.$upvoteEl.find(".vote-count").text(), r = this.$el.find(".voted"), r.length > 0 && (h = r.parent().hasClass("vote-up") ? 1 : -1), n = e.parent().hasClass("vote-up") ? 1 : -1, i = this.$upvoteEl.find(".vote-count"), e.hasClass("voted") ? (u = this.cancelVoteUrl, e.removeClass("voted"), a = parseInt(null != (c = i.text()) ? c : 0) - n) : (u = e.data("url"), s = this.$el.find(".voted"), s.removeClass("voted"), e.addClass("voted"), o = parseInt(null != (d = i.text()) ? d : 0), a = null != h ? o - (h - n) : o + n), i.text(a), $.ajax({
                    url: u,
                    type: "POST",
                    success: this.updateVotingCount,
                    error: function(t) {
                        return function() {
                            return e.removeClass("voted"), s.addClass("voted"), t.updateVotingCount(l), alert("There was a problem counting your vote.")
                        }
                    }(this)
                })
            }, t.prototype.updateVotingCount = function(t) {
                var e, i;
                return e = null != (i = parseInt(t)) ? i : 0, this.$upvoteEl.find(".vote-count").text(e), this.$upvoteEl.find("a").toggleClass("vote-count-zero", 0 === e)
            }, t
        }(), Featurette.register("forum-voting", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.renderRepos = e(this.renderRepos, this), this.getRepos = e(this.getRepos, this), this.el = $(t), this.githubUsername = this.el.data("github-username"), this.githubSection = this.el.find("ul"), this.getRepos(this.githubUsername, this.githubSection, this.renderRepos)
            }
            return t.prototype.getRepos = function(t, e) {
                var i, s;
                return i = "https://api.github.com/users/" + t + "/repos", s = this, $.ajax({
                    url: i,
                    dataType: "jsonp",
                    crossDomain: !0,
                    success: function(i) {
                        var r;
                        return r = i.data, r = $.grep(r, function(t) {
                            return !t.fork
                        }), r.sort(function(t, e) {
                            return e.watchers_count - t.watchers_count
                        }), r = $(r), s.renderRepos(r, t, e)
                    }
                })
            }, t.prototype.renderRepos = function(t, e, i) {
                return t.length > 0 && (i.parent().removeClass("hidden"), t.each(function(t) {
                    var s, r;
                    return s = {
                        repoName: this.name,
                        repoDescription: this.description,
                        repoUrl: this.html_url,
                        repoForksUrl: "" + this.html_url + "/network",
                        repoForks: "" + this.forks + " fork" + (1 === this.forks ? "" : "s"),
                        repoStargazersUrl: "" + this.html_url + "/stargazers",
                        repoStargazers: "" + this.watchers + " stargazer" + (1 === this.watchers ? "" : "s"),
                        repoOwner: this.owner.login === e
                    }, r = HoganTemplates["profile/github_repo"].render(s), t > 1 && (r = $(r).hide()), i.append(r)
                }), t.length > 2) ? this.setToggle(i) : void 0
            }, t.prototype.setToggle = function(t) {
                return t.parent().find("div.show-all-repos").removeClass("hidden"), t.parent().find("div.show-all-repos a.button").click(function() {
                    return function(e) {
                        var i;
                        return t.find("li.grid-50.tablet-grid-50").slice(2).slideToggle(), i = $(e.target), i.text("See all repositories" === i.text() ? "Hide repositories" : "See all repositories")
                    }
                }(this))
            }, t
        }(), Featurette.register("github-profile", t)
    }.call(this),
    function() {
        var t, e, i = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        t = function() {
            function t(t) {
                this.removeMessage = i(this.removeMessage, this), this.id = t.id, this.mikeId = "mike", this.mikeSound = "mike-sound", this.countCookie = "mikeCounter", this.setupMike(), this.el = $(t), this.el.on("click", ".close-message", this.removeMessage), $(document).on("scroll", this.removeMessage)
            }
            return t.prototype.setupMike = function() {
                return this.canPlayMp3() || this.canPlayOgg() ? $("#" + this.mikeId).click(function(t) {
                    return function() {
                        var e;
                        return $("#" + t.id).slideToggle("fast"), e = parseInt($.cookie(t.countCookie)) || 0, e % 10 === 0 && $("#" + t.mikeSound)[0].play(), $.cookie(t.countCookie, e + 1)
                    }
                }(this)) : void 0
            }, t.prototype.canPlayMp3 = function() {
                var t;
                return t = document.createElement("audio"), !(!t.canPlayType || !t.canPlayType("audio/mpeg;").replace(/no/, ""))
            }, t.prototype.canPlayOgg = function() {
                var t;
                return t = document.createElement("audio"), !(!t.canPlayType || !t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))
            }, t.prototype.removeMessage = function() {
                return this.el.fadeOut(500), $("body").removeClass("global-message-displayed")
            }, t
        }(), Featurette.register("global-message-container", t), e = function(t) {
            function e(t) {
                var e;
                this.id = t.id, e = $(t), this.key = e.attr("data-hide"), "true" !== $.cookie(this.key) && e.show(), e.find(".close-message").click(function() {
                    return this.key = e.attr("data-hide"), e.hide(), $.cookie(this.key, "true", {
                        expires: 365,
                        path: "/"
                    }), $("body").removeClass("global-message-displayed")
                })
            }
            return r(e, t), e
        }(t), Featurette.register("global-message-container-with-key", e)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.hideDateFields = e(this.hideDateFields, this), this.showDateFields = e(this.showDateFields, this), this.onTypeChange = e(this.onTypeChange, this), i.__super__.constructor.apply(this, arguments), this.dateFields = this.get("#content-report-dates"), this.on("change", "[name=report_type]", this.onTypeChange)
            }
            return s(i, t), i.prototype.onTypeChange = function(t) {
                return "members" === t.currentTarget.value ? this.showDateFields() : this.hideDateFields()
            }, i.prototype.showDateFields = function() {
                return this.dateFields.addClass("hidden")
            }, i.prototype.hideDateFields = function() {
                return this.dateFields.removeClass("hidden")
            }, i
        }(Treehouse.View), Featurette.register("group-reports-form", t)
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        t = function(t) {
            function e(t) {
                this.element = $(t), this.element.hover(this.updateChart, this.restoreChart)
            }
            return i(e, t), e.prototype.updateChart = function(t) {
                var e, i, s;
                return Treehouse.restoreGroupStats = !1, s = $(t.target).closest(".stat"), e = $(s), $(".stat").removeClass("selected"), e.addClass("selected"), i = $(e.data("target")), i.data("title", e.data("title")), i.data("label", e.data("label")), i.data("stats", e.data("stats")), i.data("line-color", e.data("line-color")), i.data("tooltip-label", e.data("tooltip-label")), Featurette.get("stats-line-chart").updateChart(i)
            }, e.prototype.restoreChart = function(t) {
                return Treehouse.restoreGroupStats = !0, _.delay(function() {
                    return function() {
                        var e, i, s;
                        if (Treehouse.restoreGroupStats) return s = $(t.target).closest(".stat"), e = $(s), $(".stat").removeClass("selected"), i = $(e.data("target")), i.data("title", i.data("default-title")), i.data("label", i.data("default-label")), i.data("stats", i.data("default-stats")), i.data("line-color", i.data("default-line-color")), i.data("tooltip-label", i.data("default-tooltip-label")), Featurette.get("stats-line-chart").updateChart(i)
                    }
                }(this), 250)
            }, e
        }(Treehouse.View), Featurette.register("group-stats-category", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.respectAnchor = e(this.respectAnchor, this), this.element = $(t), _.delay(this.respectAnchor, 500)
            }
            return t.prototype.respectAnchor = function() {
                var t, e;
                return t = window.location.hash.substring(1), "" === t ? null : (e = Featurette.get(t), void 0 !== e ? (_.each(this.element.find("[data-featurette='expandable-content-card']"), function() {
                    return function(t) {
                        return Featurette.get($(t).attr("id")).contract(0)
                    }
                }(this)), e.expand(0), $(window).scrollTop($(window).scrollTop() - 100)) : void 0)
            }, t
        }(), Featurette.register("grouped-content-cards", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.id = t.id, $(t).find("#contact-form .honey-pot-field").remove(), this.resetContactForm(), $(t).find("#contact-form").submit(function(t) {
                    return function(e) {
                        return t.handleSubmit(e)
                    }
                }(this))
            }
            return t.prototype.resetContactForm = function() {
                var t;
                return t = $("#" + this.id), t.find("#contact-form input").add("#" + this.id + " #contact-form textarea").removeClass("field_with_errors"), t.find(".error-message").hide(), t.find(".message").hide(), window.element = t, this.hasBeenSubmitted && t.find("#contact-form").show(), this.hasBeenSubmitted && t.find(".form-footer .button").show(), this.hasBeenSubmitted = !1
            }, t.prototype.handleSubmit = function(t) {
                var e;
                return e = $("#" + this.id), this.resetContactForm(), e.find("#contact-form").hide(), e.find(".form-footer .button").hide(), e.find(".message.waiting").show(), $.ajax({
                    url: "/contact.json",
                    type: "POST",
                    dataType: "json",
                    data: e.find("form").serialize(),
                    error: function() {
                        return function() {
                            return e.find(".message").hide(), e.find(".message.error").show()
                        }
                    }(this),
                    success: function(t) {
                        return function(i) {
                            return e.find(".message").hide(), $.isEmptyObject(i.errors) ? (e.find(".message.success").show(), t.hasBeenSubmitted = !0, e.find("#contact-form textarea").val("")) : (e.find(".message.error").show(), e.find("#contact-form").show(), e.find(".form-footer .button").show(), $.each(i.errors, function(t, i) {
                                return e.find("#contact_form_" + t).addClass("field_with_errors").closest("div.form-item").find(".error-message").show().text(i[0])
                            }))
                        }
                    }(this)
                }), t.preventDefault()
            }, t
        }(), Featurette.register("help-form", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                var e;
                e = $(t), e.find(".play-button a").on("click", function(t) {
                    var i;
                    return e.find(".video-feature").fadeOut(1e3), i = Featurette.get(e.find("video").attr("id")), i.endCallback = function() {
                        return e.find(".video-feature").fadeIn(1e3)
                    }, i.player.play(), t.preventDefault()
                })
            }
            return t
        }(), Featurette.register("how-treehouse-works-video", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("see-think-do-v2", t = function(t) {
            function i() {
                this.playVideo = e(this.playVideo, this), i.__super__.constructor.apply(this, arguments), this.on("click", ".play-button", this.playVideo)
            }
            return s(i, t), i.prototype.playVideo = function() {
                return this.get(".video-preview").addClass("hide"), this.get(".video-cta").addClass("hide"), this.get(".video-full").removeClass("hide"), this.get(".content-section .arrow").removeClass("hide"), this.get(".video-full video").play()
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e, i = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        e = function(t) {
            function e() {
                this.launch = i(this.launch, this), this.onClick = i(this.onClick, this), e.__super__.constructor.apply(this, arguments), this.setup(), this.el
            }
            return r(e, t), e.prototype.setup = function() {
                return this.on("click", this.onClick)
            }, e.prototype.onClick = function(t) {
                return this.launch(this.data.id), null != t ? t.preventDefault() : void 0
            }, e.prototype.launchOpts = "top=100,left=100,height=768,width=1024,scrollbars=0,location=0,menubar=0,toolbar=0", e.prototype.launch = function(t) {
                var e, i, s;
                return e = "/workspaces/" + t, null != this.win ? this.win.location = e : this.win = window.open(e, null, this.launchOpts), null == this.win && alert("It looks like your pop up blocker blocked the workspace window."), this.win = null, null != (i = Featurette.get(this.el.closest(".modal").attr("id"))) && i.closeOverlay(), null != (s = $(".video-alert .alert")) ? s.remove() : void 0
            }, e
        }(Treehouse.View), t = function(t) {
            function e() {
                return this.onError = i(this.onError, this), this.onCreate = i(this.onCreate, this), this.submit = i(this.submit, this), e.__super__.constructor.apply(this, arguments)
            }
            return r(e, t), e.prototype.setup = function() {
                return this.on("submit", this.submit), this.resetErrors(), this.callbackUrl = this.data.callbackUrl, this.redirectUrl = this.data.redirect_url
            }, e.prototype.submit = function(t) {
                var e, i, s, r;
                return this.resetErrors(), r = this.get("#workspace_title"), 0 === r.val().length ? (i = "<span class='error-message'>A title is required</span>", r.addClass("field_with_errors").after(i), null != t && t.preventDefault(), !1) : (this.win = window.open("about:blank", null, this.launchOpts), e = {
                    title: r.val(),
                    item_type: this.get("#workspace_item_type").val(),
                    item_id: this.get("#workspace_item_id").val(),
                    forked_workspace_id: this.get("#workspace_forked_workspace_id").val(),
                    workspace_template_group_id: this.get("#workspace_workspace_template_group_id").val()
                }, s = this.get("#source").val(), $.ajax({
                    url: "/workspaces",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    processData: !1,
                    headers: {
                        "X-CSRF-Token": $("meta[name='csrf-token']").attr("content")
                    },
                    data: JSON.stringify({
                        source: s,
                        workspace: e
                    }),
                    success: function(t) {
                        return function(e) {
                            return t.onCreate(e.workspace)
                        }
                    }(this),
                    error: function(t) {
                        return function(e) {
                            return t.onError(e)
                        }
                    }(this)
                }), null != t ? t.preventDefault() : void 0)
            }, e.prototype.onCreate = function(t) {
                return this.launch(t.id), null != this.redirectUrl ? _.delay(function(t) {
                    return function() {
                        return location.href = t.redirectUrl
                    }
                }(this), 1e3) : location.pathname.match(/^\/workspaces/) ? _.delay(function() {
                    return location.reload()
                }, 1e3) : null != this.callbackUrl ? this.performCallback() : void 0
            }, e.prototype.onError = function(t) {
                var e, i, s, r, o;
                r = $.parseJSON(t.responseText).errors, (i = r.base) && (delete r.base, this.get(".field-container").first().before("<div class='error message'><p>" + i[0] + "</p></div>"));
                for (e in r) s = r[e], this.get("#workspace_" + e).addClass("field_with_errors").after("<span class='error-message'>" + s[0] + "</span>");
                return null != (o = this.win) ? o.close() : void 0
            }, e.prototype.resetErrors = function() {
                return this.get(".error-message").remove()
            }, e.prototype.performCallback = function() {
                return $.ajax({
                    type: "GET",
                    url: this.callbackUrl,
                    success: function() {
                        return function(t) {
                            return $(".workspaces-container").html(t), Treehouse.init()
                        }
                    }(this)
                })
            }, e
        }(e), Featurette.register("launch-workspace", e), Featurette.register("launch-new-workspace", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.loadBoard = e(this.loadBoard, this), this.selectTopic = e(this.selectTopic, this), this.selectPeriod = e(this.selectPeriod, this), this.el = $(t), this.type = this.el.data("type"), this.periodSelector = this.el.find(".periods a"), this.topicSelector = this.el.find("select.topic-selector"), this.board = this.el.siblings(".leaderboard-list"), this.topicSelector.on("change", this.selectTopic), this.periodSelector.on("click", this.selectPeriod)
            }
            return t.prototype.selectPeriod = function(t) {
                return t.preventDefault(), $(t.target).addClass("selected").closest("li").siblings().find("a").removeClass("selected"), this.loadBoard()
            }, t.prototype.selectTopic = function() {
                return this.topicSelector.siblings("span").text(this.topicSelector.find("option:selected").text()), this.loadBoard()
            }, t.prototype.loadBoard = function() {
                return $.ajax({
                    url: "/leaderboard",
                    data: {
                        board_type: this.type,
                        topic: this.topicSelector.find("option:selected").val(),
                        period: this.periodSelector.closest("ul").find("a.selected").data("period")
                    },
                    dataType: "json",
                    success: function(t) {
                        return function(e) {
                            return t.board.empty(), t.board.append(e.html), t.board.find(".icon").css("background-color", t.topicSelector.find(":selected").data("color"))
                        }
                    }(this)
                })
            }, t
        }(), Featurette.register("leaderboards-navigation", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.requiredFields = e(this.requiredFields, this), this.form = $(t), this.contactEmailOnClick(), this.contactPhoneOnClick(), this.iePlaceholders(), this.requiredFields()
            }
            return t.prototype.contactEmailOnClick = function() {
                return $("#contact-email").click(function() {
                    return $("#phone-email").val(""), $("#phone-email").attr("placeholder", "Email Address"), $("#mailing-list-subscribe").removeClass("hide")
                })
            }, t.prototype.contactPhoneOnClick = function() {
                return $("#contact-phone").click(function() {
                    return $("#phone-email").val(""), $("#phone-email").attr("placeholder", "Phone Number"), $("#mailing-list-subscribe").addClass("hide")
                })
            }, t.prototype.requiredFields = function() {
                return this.form.submit(function(t) {
                    return $(this).find(".required").each(function() {
                        return function(e, i) {
                            return i = $(i), i.removeClass("error"), i.parents(".form-element").removeClass("error"), i.val() === i.attr("placeholder") || "" === $.trim(i.val()) ? (t.preventDefault(), i.parents(".form-element").addClass("error"), i.addClass("error"), $(".alert-box").show()) : void 0
                        }
                    }(this))
                })
            }, t.prototype.iePlaceholders = function() {
                return $("[placeholder]").focus(function() {
                    var t;
                    return t = $(this), t.val() === t.attr("placeholder") ? (t.val(""), t.removeClass("placeholder")) : void 0
                }), $("[placeholder").blur(function() {
                    var t;
                    return t = $(this), "" === t.val() || t.val() === t.attr("placeholder") ? (t.addClass("placeholder"), t.val(t.attr("placeholder"))) : void 0
                }), $("[placeholder").blur(), $("[placeholder]").parents("form").submit(function() {
                    var t;
                    return t = $(this), t.val() === t.attr("placeholder") ? t.val("") : void 0
                })
            }, t
        }(), Featurette.register("library-inquiry-form", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.locationSource = e(this.locationSource, this), this.el = $(t).autocomplete({
                    minLength: 5,
                    source: this.locationSource,
                    open: function() {
                        return $(this).autocomplete("widget").zIndex(5)
                    }
                })
            }
            return t.prototype.locationSource = function(t, e) {
                return $.ajax({
                    url: this.el.data("autocomplete-url"),
                    data: {
                        q: t.term
                    },
                    dataType: "json",
                    success: e
                })
            }, t
        }(), Featurette.register("location-autocomplete", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.onVideoEnd = e(this.onVideoEnd, this), this.mixpanelEvent = e(this.mixpanelEvent, this), this.loadFinalStep = e(this.loadFinalStep, this), this.revealHint = e(this.revealHint, this), this.resetFeedback = e(this.resetFeedback, this), this.resetSteps = e(this.resetSteps, this), this.loadStepTwo = e(this.loadStepTwo, this), this.checkStep = e(this.checkStep, this), this.reloadCourseModule = e(this.reloadCourseModule, this), this.closeCourseModule = e(this.closeCourseModule, this), this.loadCourseModule = e(this.loadCourseModule, this), i.__super__.constructor.apply(this, arguments), this.$hero = this.get("#hero-initial"), this.$courseVideo = this.get("#course-module-video"), this.$video = this.get("video"), this.$courseCC = this.get("#course-module-cc"), this.$courseCelebration = this.get("#course-celebration"), this.$feedback = this.get("#feedback"), this.$task = this.get("#task"), this.$taskCount = this.get("#task-count > span"), this.$codeModule = $('[data-course-module="code"]'), this.$hint = this.get(".hint-code"), this.$html = $("html"), this.$checkButton = this.get(".check-work"), this.$nextTask = this.get(".next-task"), this.$video = this.$courseVideo.find("video"), this.videoElement = this.$video.get(0), this.$videoControlsHeight = 60, this.options = {
                    checkText: "Check Work",
                    reCheckText: "Recheck Work",
                    loadSpeed: 400,
                    fadeSpeed: 200,
                    task1: {
                        message: "Write a headline for your page and wrap it in an <code>&lt;h1&gt;</code> tag.",
                        regex: /\s*<h1>[\s\S]+<\/h1>\s*/i
                    },
                    task2: {
                        message: "Write an HTML paragraph below your headline.",
                        regex: /\s*<h1>[\s\S]+<\/h1>\s*<p>[\s\S]+<\/p>\s*/i
                    }
                }, this.on("click", '[data-course-module="start"]', this.loadCourseModule), this.on("click", '[data-course-module="close"]', this.closeCourseModule), this.on("click", '[data-course-module="reload"]', this.reloadCourseModule), this.on("click", '[data-course-module="check"]', this.checkStep), this.on("click", '[data-course-module="next"]', this.loadStepTwo), this.on("click", '[data-course-module="hint"]', this.revealHint), this.on("click", '[data-course-module="final"]', this.loadFinalStep), this.on("click", "[data-mixpanel-event-title]", this.mixpanelEvent), this.videoElement.addEventListener("ended", this.onVideoEnd), this.$codeModule.on("keyup", function(t) {
                    return function() {
                        return t.$hint.hasClass("show-hint") ? t.$hint.removeClass("show-hint") : void 0
                    }
                }(this))
            }
            return s(i, t), i.prototype.loadCourseModule = function(t) {
                return t.preventDefault(), this.reloadCourseModule(t), this.$hero.fadeOut(this.options.fadeSpeed), this.$courseVideo.fadeIn(this.options.loadSpeed), this.$video.trigger("play"), this.$courseCC.fadeIn(this.options.loadSpeed), this.$courseCelebration.hide()
            }, i.prototype.closeCourseModule = function(t) {
                return t.preventDefault(), this.$courseVideo.fadeOut(this.options.fadeSpeed), this.$html.removeClass("hero-video-played hero-video-paused"), this.currentTask = 0, this.$courseCC.fadeOut(this.options.loadSpeed), this.$hero.fadeIn(this.options.loadSpeed), this.resetSteps()
            }, i.prototype.reloadCourseModule = function(t) {
                return t.preventDefault(), this.$html.removeClass("hero-video-played"), this.currentTask = 0, setTimeout(function(t) {
                    return function() {
                        return t.$courseVideo.fadeIn(t.options.loadSpeed), t.$video.trigger("play"), t.$courseCelebration.fadeOut(t.options.loadSpeed), t.resetSteps()
                    }
                }(this), this.options.loadSpeed)
            }, i.prototype.checkStep = function(t) {
                return t.preventDefault(), 2 === this.currentTask ? this.options.task2.regex.test(this.$codeModule.val()) ? (this.$feedback.addClass("success"), this.$nextTask.text("Finish").attr("data-course-module", "final")) : (this.$feedback.addClass("error"), this.$checkButton.text(this.options.reCheckText)) : this.options.task1.regex.test(this.$codeModule.val()) ? (this.currentTask = 2, this.$feedback.addClass("success"), this.$hint.html(this.$hint1), this.$nextTask.attr("data-course-module", "next")) : (this.$feedback.addClass("error"), this.$checkButton.text(this.options.reCheckText))
            }, i.prototype.loadStepTwo = function(t) {
                return t.preventDefault(), this.resetFeedback(), this.$taskCount.text("2"), this.$task.html(this.options.task2.message), this.$hint.html("&lt;h1&gt;Title&lt;/h1&gt;<br>&lt;p&gt;Paragraph&lt;/p&gt;")
            }, i.prototype.resetSteps = function() {
                return this.resetFeedback(), this.$nextTask.text("Next Task"), this.$taskCount.text("1"), this.$task.html(this.options.task1.message), this.$hint.html("&lt;h1&gt;Title&lt;/h1&gt;"), this.$codeModule.val("")
            }, i.prototype.resetFeedback = function() {
                return this.$feedback.removeClass("success error"), this.$checkButton.text(this.options.checkText)
            }, i.prototype.revealHint = function(t) {
                return t.preventDefault(), this.$hint.addClass("show-hint"), setTimeout(function(t) {
                    return function() {
                        return t.$hint.removeClass("show-hint")
                    }
                }(this), 5e3)
            }, i.prototype.loadFinalStep = function(t) {
                return t.preventDefault(), this.$courseCC.fadeOut(this.options.fadeSpeed), this.$courseVideo.fadeOut(this.options.fadeSpeed), this.$courseCelebration.fadeIn(this.options.loadSpeed), this.$html.removeClass("hero-video-played hero-video-paused"), mixpanel.track("Finished Course Module CC")
            }, i.prototype.mixpanelEvent = function(t) {
                var e;
                return e = $(t.currentTarget), mixpanel.track(e.data("mixpanel-event-title"))
            }, i.prototype.onVideoEnd = function() {
                return mixpanel.track("Watched Course Module Video")
            }, i
        }(Treehouse.View), Featurette.register("marketing-course-module", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.undoStatusChange = e(this.undoStatusChange, this), this.showError = e(this.showError, this), this.hideError = e(this.hideError, this), this.hideConfirmation = e(this.hideConfirmation, this), this.showDetails = e(this.showDetails, this), this.hideDetails = e(this.hideDetails, this), this.updateRow = e(this.updateRow, this), this.departmentSelect = e(this.departmentSelect, this), this.statusSelect = e(this.statusSelect, this), this.resendInvitation = e(this.resendInvitation, this), this.removeInvitation = e(this.removeInvitation, this), this.reactivateMember = e(this.reactivateMember, this), this.removeMember = e(this.removeMember, this), this.cancelAction = e(this.cancelAction, this), this.disableButton = e(this.disableButton, this), this.updateDepartment = e(this.updateDepartment, this), this.updateStatus = e(this.updateStatus, this), i.__super__.constructor.apply(this, arguments), this.memberId = this.statusSelect().data("member-id"), this.status = this.statusSelect().find("option:selected").val(), this.department = this.departmentSelect().find("option:selected").val(), this.on("change", "select[name=status]", this.updateStatus), this.on("change", "select[name=department]", this.updateDepartment), this.on("click", ".member-action-confirmation button.secondary", this.cancelAction), this.on("click", "button.primary", this.disableButton), this.on("click", ".cancel button.primary", this.removeMember), this.on("click", ".reactivate button.primary", this.reactivateMember), this.on("click", ".cancel-invitation button.primary", this.removeInvitation), this.on("click", ".resend-invitation button.primary", this.resendInvitation), this.on("click", ".member-action-error button", this.hideError)
            }
            return s(i, t), i.prototype.updateStatus = function() {
                var t;
                if (t = this.statusSelect().find("option:selected").val(), t !== this.status) switch (t) {
                    case "cancelled":
                        return this.hideDetails(), this.show(this.get(".member-action-confirmation.cancel"));
                    case "active":
                        return this.hideDetails(), this.show(this.get(".member-action-confirmation.reactivate"));
                    case "reinvited":
                        return this.hideDetails(), this.show(this.get(".member-action-confirmation.resend-invitation"));
                    case "removed":
                        return this.hideDetails(), this.show(this.get(".member-action-confirmation.cancel-invitation"))
                }
            }, i.prototype.updateDepartment = function() {
                var t, e, i, s;
                return t = this.departmentSelect().data("action"), i = this.departmentSelect().data("member-type"), s = this.departmentSelect().find("option:selected").val(), e = {
                    member_type: i,
                    department_id: s
                }, s !== this.department ? $.ajax(t, {
                    type: "PUT",
                    data: e
                }).done(function(t) {
                    return function() {
                        return t.department = s
                    }
                }(this)).fail(function(t) {
                    return function(e) {
                        return t.updateRow(e.responseText), t.undoStatusChange(), t.showError()
                    }
                }(this)) : void 0
            }, i.prototype.disableButton = function(t) {
                return this.disable(t.target)
            }, i.prototype.cancelAction = function() {
                return this.hideConfirmation(), this.showDetails(), this.undoStatusChange()
            }, i.prototype.removeMember = function() {
                var t;
                return t = this.statusSelect().data("cancel-action"), $.ajax(t, {
                    type: "DELETE"
                }).done(function(t) {
                    return function(e) {
                        return t.updateRow(e), t.status = "cancelled", t.showDetails()
                    }
                }(this)).fail(function(t) {
                    return function(e) {
                        return t.updateRow(e.responseText), t.undoStatusChange(), t.showError()
                    }
                }(this)).always(function(t) {
                    return function() {
                        return t.hideConfirmation()
                    }
                }(this))
            }, i.prototype.reactivateMember = function() {
                var t;
                return t = this.statusSelect().data("reactivate-action"), $.ajax(t, {
                    type: "POST"
                }).done(function(t) {
                    return function(e) {
                        return t.updateRow(e), t.status = "active", t.showDetails()
                    }
                }(this)).fail(function(t) {
                    return function(e) {
                        return t.updateRow(e.responseText), t.undoStatusChange(), t.showError()
                    }
                }(this)).always(function(t) {
                    return function() {
                        return t.hideConfirmation()
                    }
                }(this))
            }, i.prototype.removeInvitation = function() {
                var t;
                return t = this.statusSelect().data("cancel-invitation-action"), $.ajax(t, {
                    type: "DELETE"
                }).fail(function(t) {
                    return function() {
                        return t.undoStatusChange(), t.showError()
                    }
                }(this)).always(function(t) {
                    return function() {
                        return t.hideConfirmation()
                    }
                }(this))
            }, i.prototype.resendInvitation = function() {
                var t;
                return t = this.statusSelect().data("resend-invitation-action"), $.ajax(t, {
                    type: "POST"
                }).done(function(t) {
                    return function(e) {
                        return t.updateRow(e), t.status = "invited", t.showDetails()
                    }
                }(this)).fail(function(t) {
                    return function() {
                        return t.undoStatusChange(), t.showError()
                    }
                }(this)).always(function(t) {
                    return function() {
                        return t.hideConfirmation()
                    }
                }(this))
            }, i.prototype.statusSelect = function() {
                return this.get("select[name=status]")
            }, i.prototype.departmentSelect = function() {
                return this.get("select[name=department]")
            }, i.prototype.updateRow = function(t) {
                var e;
                return t.trim() ? (e = $(t), this.el.attr("class", e.attr("class")), this.el.html(e.html()), this.clearElementsCache(), Treehouse.init()) : void 0
            }, i.prototype.hideDetails = function() {
                return this.hide(this.get(".member-row"))
            }, i.prototype.showDetails = function() {
                return this.show(this.get(".member-row"))
            }, i.prototype.hideConfirmation = function() {
                return this.hide(this.get(".member-action-confirmation")), this.enable(this.get("button.primary"))
            }, i.prototype.hideError = function() {
                return this.hide(this.get(".member-action-error")), this.showDetails()
            }, i.prototype.showError = function() {
                return this.hideDetails(), this.show(this.get(".member-action-error"))
            }, i.prototype.undoStatusChange = function() {
                return this.statusSelect().val(this.status).change()
            }, i.prototype.hide = function(t) {
                return $(t).addClass("hidden")
            }, i.prototype.show = function(t) {
                return $(t).removeClass("hidden")
            }, i.prototype.disable = function(t) {
                var e;
                return e = $(t), e.prop("disabled", !0), e.addClass("disabled")
            }, i.prototype.enable = function(t) {
                var e;
                return e = $(t), e.prop("disabled", !1), e.removeClass("disabled")
            }, i
        }(Treehouse.View), Featurette.register("member-row", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.updateMembersList = e(this.updateMembersList, this), this.searchInput = e(this.searchInput, this), this.setSearchFocus = e(this.setSearchFocus, this), this.filterOptions = e(this.filterOptions, this), this.setupFilters = e(this.setupFilters, this), this.addMemberToGroup = e(this.addMemberToGroup, this), this.hideNewMemberForm = e(this.hideNewMemberForm, this), this.showNewMemberForm = e(this.showNewMemberForm, this), i.__super__.constructor.apply(this, arguments), this.on("click", "#add-member-button", this.showNewMemberForm), this.on("click", "#new-member-cancel", this.hideNewMemberForm), this.on("click", ".pagination-container a", this.updateMembersList), this.on("submit", "#new-member-form", this.addMemberToGroup), this.on("pjax:end", this.setSearchFocus), this.on("pjax:end", this.setupFilters), this.groupSize = this.el.data("group-size"), this.pageSize = this.groupSize, this.setupFilters(), this.setSearchFocus()
            }
            return s(i, t), i.prototype.showNewMemberForm = function() {
                return this.el.find("#new-member-form").removeClass("hidden"), this.el.find("#add-member-button").addClass("disabled"), this.el.find("#new-member-input").select()
            }, i.prototype.hideNewMemberForm = function(t) {
                return t.preventDefault(), this.el.find("#new-member-form").addClass("hidden"), this.el.find("#add-member-button").removeClass("disabled")
            }, i.prototype.addMemberToGroup = function(t) {
                return $.pjax.submit(t, this.el, {
                    push: !1,
                    scrollTo: !1
                })
            }, i.prototype.setupFilters = function() {
                return _.delay(function(t) {
                    return function() {
                        return new Treehouse.Layout.Application.ControlBar(t.el.find("[data-layout-element=member-controls]")), new Filters({
                            basePath: "group/members",
                            container: t.el,
                            binds: t.filterOptions()
                        })
                    }
                }(this), 100)
            }, i.prototype.filterOptions = function() {
                var t;
                return t = {}, t.search = this.searchInput(), t.sort = Featurette.get("sort"), Featurette.get("filter") && (t.filter = Featurette.get("filter")), t
            }, i.prototype.setSearchFocus = function() {
                return this.searchInput().val() ? this.searchInput().focus() : void 0
            }, i.prototype.searchInput = function() {
                return this.el.find("#search")
            }, i.prototype.updateMembersList = function(t) {
                return t.preventDefault(), $.pjax({
                    url: t.currentTarget.href,
                    container: this.el,
                    push: !1,
                    scrollTo: !1
                })
            }, i
        }(Treehouse.View), Featurette.register("member-table", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.onFormSubmit = e(this.onFormSubmit, this);
                var i;
                this.textarea = $(t), this.form = this.textarea.closest("form"), this.textarea.mentionsInput({
                    onDataRequest: this.onDataRequest,
                    triggerChar: "@",
                    minChars: 1,
                    showAvatars: !0,
                    elastic: !1,
                    templates: {
                        autocompleteList: _.template('<ul class="user-tagging"></ul>'),
                        autocompleteListItem: _.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><a><strong><%= content %></strong><p>@<%= username %></p></a></li>'),
                        autocompleteListItemAvatar: _.template('<div class="avatar <%= type %>" style="background-image: url(<%= avatar %>)"></div>')
                    }
                }), (i = this.textarea.data("mentions")) && this.textarea.mentionsInput("setMentions", this.textarea.data("mentions-body"), i), this.form.on("submit", this.onFormSubmit)
            }
            return t.prototype.onFormSubmit = function() {
                return this.textarea.mentionsInput("val", function(t) {
                    return function(e) {
                        var i;
                        return i = $("<input type='hidden' name='" + t.textarea.attr("name") + "'/>"), i.val(e), t.textarea.after(i), t.textarea.attr("name", "gui_body")
                    }
                }(this))
            }, t.prototype.onDataRequest = function(t, e, i) {
                return $.getJSON("/user/mention_search.json", {
                    query: e
                }, function(t) {
                    return i.call(this, t)
                })
            }, t
        }(), Featurette.register("mentions", t)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Featurette.register("mobile-shelf", function() {
            function e(e) {
                this.toggleShelf = t(this.toggleShelf, this), this.el = $(e), this.el.on("click", this.toggleShelf)
            }
            return e.prototype["class"] = "shelf-open", e.prototype.toggleShelf = function() {
                return this.isShelfOpen ? $("body").removeClass(this["class"]) : $("body").addClass(this["class"]), this.isShelfOpen = !this.isShelfOpen
            }, e
        }())
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.always = e(this.always, this), this.fail = e(this.fail, this), this.done = e(this.done, this), this.submit = e(this.submit, this), this.element = $(t), this.form = this.element.find("form#" + this.element.data("form")), $(document).on("submit", "#" + this.form.attr("id"), this.submit)
            }
            return t.prototype.submit = function(t) {
                var e;
                return t.preventDefault(), e = $.ajax({
                    cache: !1,
                    type: "post",
                    url: this.form.attr("action"),
                    data: this.form.serialize(),
                    dataType: "json"
                }), e.done(this.done), e.fail(this.fail), e.always(this.always)
            }, t.prototype.done = function(t) {
                return t.redirect ? location.href = t.redirect : this.element.html(response.responseText), this.form.trigger("modal-form:done")
            }, t.prototype.fail = function(t) {
                var e, i, s;
                e = $.parseJSON(t.responseText).errors;
                for (i in e) s = e[i], this.form.find("[name$='[" + i + "]']").after($("<div class='field_with_errors'><p class='error-message'>" + s.shift() + "</p></div>"));
                return this.form.trigger("modal-form:fail")
            }, t.prototype.always = function() {
                return this.element.find(".form-item label:not(.prefill)").inFieldLabels()
            }, t
        }(), Featurette.register("modal-form", t)
    }.call(this),
    function() {
        var t, e, i = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        e = function() {
            function t(t) {
                this.handleElementClick = i(this.handleElementClick, this), this.modal = i(this.modal, this), this.triggerModal = i(this.triggerModal, this), this.id = t.id, this.element = $(t), this.target = this.element.attr("data-target"), this.stack = this.element.data("stack"), this.element.attr("data-mobile-fallback") && $(window).width() <= 480 || this.element.click(this.handleElementClick)
            }
            return t.prototype.triggerModal = function() {
                return this.element.trigger("modal:trigger"), this.modal().showOverlay({
                    stack: this.stack
                })
            }, t.prototype.modal = function() {
                return Featurette.get(this.target)
            }, t.prototype.handleElementClick = function(t) {
                return t.preventDefault(), this.triggerModal()
            }, t
        }(), Featurette.register("modal-trigger", e), t = function(t) {
            function e(t) {
                this.loadAsyncModal = i(this.loadAsyncModal, this), this.handleElementClick = i(this.handleElementClick, this), e.__super__.constructor.call(this, t), this.src = this.element.attr("data-src"), this.loading = !1, this.element.attr("data-disable-while-loading") || this.element.attr("data-disable-while-loading", "true"), this.parentLi = this.element.parent("li")
            }
            return r(e, t), e.prototype.handleElementClick = function(t) {
                return this.loadAsyncModal(function(t) {
                    return function() {
                        return t.triggerModal()
                    }
                }(this)), t.preventDefault()
            }, e.prototype.loadAsyncModal = function(t) {
                var e;
                return this.loading && this.element.data("disable-while-loading") === !0 ? !1 : (this.loading = !0, this.element.addClass("loading"), this.parentLi.addClass("loading"), this.element.trigger("loading"), e = this.modal(), $.get(this.src, {}, function(i) {
                    return function(s) {
                        return $(e.el).html(s), Featurette.load(), i.loading = !1, i.element.removeClass("loading"), i.parentLi.removeClass("loading"), i.element.trigger("loaded"), t()
                    }
                }(this)))
            }, e
        }(e), Featurette.register("async-modal-trigger", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.element = $(t), this.element.find("#email").remove(), this.donateButton = $("#scrollButton_donate"), this.signupButton = $("#scrollButton_signup"), this.signUpTarget = this.element.find("#scrollTarget_signup"), this.signupOffset = this.signUpTarget.offset().top, this.donationForm = this.element.find("form#scrollTarget_donate"), this.donateOffset = this.donationForm.offset().top, this.signupButton.click(function(t) {
                    return function(e) {
                        return e.preventDefault(), $("html, body").animate({
                            scrollTop: t.signupOffset
                        }, 600)
                    }
                }(this)), this.donateButton.click(function(t) {
                    return function(e) {
                        return e.preventDefault(), $("html, body").animate({
                            scrollTop: t.donateOffset
                        }, 600)
                    }
                }(this)), this.donationForm.submit(function(t) {
                    return function(e) {
                        return e.preventDefault(), $("#donate-submit").attr("value", "Submitting...").addClass("submitting"), $.post(t.donationForm.attr("action"), t.donationForm.serialize()).done(function() {
                            return t.submittedSuccess()
                        }).fail(function() {
                            return t.submittedError()
                        })
                    }
                }(this)), setTimeout(function() {
                    return function() {
                        return $(".animation-container").addClass("start-animation")
                    }
                }(this), 600)
            }
            return t.prototype.submittedSuccess = function() {
                return $("#donate-submit").attr("value", "Get in touch").removeClass("submitting"), this.donationForm[0].reset(), $("#default-form-content").hide(), $("#success-form-content").show()
            }, t.prototype.submittedError = function() {
                return $("#donate-submit").attr("value", "Get in touch").removeClass("submitting"), $("#error-alert").show()
            }, t
        }(), Featurette.register("bogo-page", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("career-projects", t = function(t) {
            function i(t) {
                this.removeProject = e(this.removeProject, this), this.addNewProject = e(this.addNewProject, this), i.__super__.constructor.apply(this, arguments), this.form = new StandardForm(t), this.el.on("click", ".project-input-trigger", this.addNewProject), this.el.on("click", ".remove-trigger", this.removeProject), this.updateForm()
            }
            return s(i, t), i.prototype.addNewProject = function(t) {
                var e, i, s;
                return t.preventDefault(), s = this.el.find("#career-project-fields-template").html(), i = (new Date).getTime(), e = $(s.replace(/new_career_project/g, i)), $(t.currentTarget).before(e), this.updateForm(), Treehouse.init(), e.find(":input:first").focus()
            }, i.prototype.updateForm = function() {
                return this.el.find(".career-project:visible .project-number").each(function(t) {
                    return $(this).text(t + 1)
                }), this.el.find(".form-footer:not(:last)").hide(), 1 === this.el.find(".career-project:visible").length ? this.el.find(".career-project:visible:first .remove-trigger").hide() : this.el.find(".career-project:visible .remove-trigger").show()
            }, i.prototype.removeProject = function(t) {
                return t.preventDefault(), $(t.currentTarget).prev("input[type=hidden]").val("1"), $(t.currentTarget).closest(".career-project").hide(), this.updateForm()
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.element = $(t), this.CObutton = $("#codeOregonFormButton"), this.COTarget = this.element.find("#codeOregonTarget"), this.COOffset = this.COTarget.offset().top, this.CObutton.click(function(t) {
                    return function(e) {
                        return e.preventDefault(), $("html, body").animate({
                            scrollTop: t.COOffset
                        }, 600)
                    }
                }(this))
            }
            return t
        }(), Featurette.register("code-oregon-page", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("forum-index", t = function(t) {
            function i() {
                this.deselectAll = e(this.deselectAll, this), this.listeners = e(this.listeners, this), i.__super__.constructor.apply(this, arguments), this.container = $("#forums-pjax"), _.defer(this.listeners)
            }
            return s(i, t), i.prototype.listeners = function() {
                return this.filters = new Filters({
                    basePath: "forum",
                    container: "#forums-pjax",
                    binds: {
                        sort: Featurette.get("sort"),
                        topic: Featurette.get("topic"),
                        q: $("#q"),
                        stage: $("#stage_id"),
                        syllabus: $("#syllabus_id"),
                        video: $("#video_id"),
                        quiz: $("#quiz_id"),
                        "code-challenge": $("#code-challenge_id")
                    }
                }), this.on("click", ".form-search .search-button", function(t) {
                    return function(e) {
                        return t.filters.update(e)
                    }
                }(this)), this.on("click", "[data-filter-tag]", this.deselectAll), $(document).on("filters:serialized", function() {
                    return function() {
                        return $("#forum_post_topic_id option").each(function() {
                            return this.text.toLowerCase() === Featurette.get("topic").val().replace("-", " ") ? this.selected = !0 : void 0
                        }), $.uniform.update()
                    }
                }(this))
            }, i.prototype.deselectAll = function(t) {
                return $("#stage_id, #syllabus_id, #video_id, #quiz_id, #code-challenge_id").not("" + $(t.currentTarget).data("filter-tag-type") + "_id").val("")
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.scrollToForm = e(this.scrollToForm, this), this.onSubmit = e(this.onSubmit, this), this.onContactTypeChange = e(this.onContactTypeChange, this), this.closeSuccess = e(this.closeSuccess, this), i.__super__.constructor.apply(this, arguments), this.on("submit", "#contact-form", this.onSubmit), this.on("change", "[name='Industry']", this.onContactTypeChange), $("#btn-contact-form").on("click", this.scrollToForm), $("#btn-success-close").on("click", this.closeSuccess), this.handleUrlParams()
            }
            return s(i, t), i.prototype.closeSuccess = function(t) {
                return t.preventDefault(), $("#success").fadeOut(300)
            }, i.prototype.handleUrlParams = function() {
                return "school" === Treehouse.queryString().type && (this.scrollToForm(), _.defer(function(t) {
                    return function() {
                        return t.get("#contact-type-school").click()
                    }
                }(this))), Treehouse.queryString().success ? $("#groups header #success").fadeIn(300) : void 0
            }, i.prototype.onContactTypeChange = function(t) {
                return "School" === t.target.value ? (this.get("#uniform-contact-school-options").show(), this.get("#uniform-contact-business-options").hide()) : (this.get("#uniform-contact-school-options").hide(), this.get("#uniform-contact-business-options").show())
            }, i.prototype.onSubmit = function() {
                return this.get(".error-message").hide(), this.setFirstAndLastName(), this.validateFields() ? void 0 : !1
            }, i.prototype.validateFields = function() {
                var t, e;
                return t = new Array, e = ["Industry", "No of Employees", "Company", "Full Name", "Email"], $.each(e, function(e) {
                    return function(i, s) {
                        var r, o;
                        return o = e.get("[name='" + s + "']"), 0 === o.val().length ? (t.push(s), r = o.parent().find(".error-message"), r.html("Please complete " + s), r.show()) : void 0
                    }
                }(this)), t.length > 0 ? void 0 : !0
            }, i.prototype.setFirstAndLastName = function() {
                var t;
                return t = this.get("[name='Full Name']").val().split(" "), t.length > 1 && this.get("[name='Last Name']").val(t.pop()), this.get("[name='First Name']").val(t.join(" "))
            }, i.prototype.scrollToForm = function() {
                return $("html, body").animate({
                    scrollTop: this.get("#contact-form").offset().top - 40
                }, 800), this.get("#contact-form").addClass("highlight")
            }, i
        }(Treehouse.View), Featurette.register("group-form", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.showImagePreview = e(this.showImagePreview, this), this.el = $(t), $("#contact-method-selector").on("change", this.contactMethodToggle), $(".radio-replacement-wrapper").on("click", this.replaceRadios), $("#job_company_logo").on("change", this.showImagePreview), this.contactMethodInit(), this.setupRadios()
            }
            return t.prototype.contactMethodInit = function() {
                var t, e;
                return t = $(".contact_email"), e = $(".contact_url"), "" !== e.children("input").val() ? ($("#contact-method-selector").val("url"), t.hide()) : ($("#contact-method-selector").val("email"), e.hide())
            }, t.prototype.contactMethodToggle = function() {
                var t;
                return t = $("#contact-method-selector").val(), $("#contact-method-selector-wrapper input").val("").parents(".form-item").hide(), $(".contact_" + t).show()
            }, t.prototype.replaceRadios = function(t) {
                var e;
                return e = $(t.delegateTarget), e.siblings(".radio-replacement-wrapper").removeClass("selected"), e.addClass("selected"), e.find("input[type='radio']").attr("checked", "checked")
            }, t.prototype.setupRadios = function() {
                var t;
                return t = $(".radio-replacement-wrapper input[type='radio']:checked"), 0 === t.length ? $(".radio-collection").each(function(t, e) {
                    return $(e).find(":radio").first().attr("checked", "checked").parents(".radio-replacement-wrapper").addClass("selected")
                }) : t.parent().addClass("selected")
            }, t.prototype.highlightRadioContainer = function(t) {
                return $(t).parents(".radio-replacement-wrapper").addClass("selected")
            }, t.prototype.showImagePreview = function(t) {
                return window.File && window.FileReader && window.FileList && window.Blob ? _.each(t.target.files, function(t) {
                    var e;
                    return e = new FileReader, e.onload = function(t) {
                        var e;
                        return e = $(".company-logo").empty(), $("<img src='" + t.target.result + "' />").appendTo(e).hide().show(250), $(".company-logo").css({
                            "background-image": "background-image",
                            none: "none"
                        })
                    }, e.readAsDataURL(t)
                }) : void 0
            }, t
        }(), Featurette.register("job-form", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("library-index", t = function(t) {
            function i() {
                this.dynamicTitle = e(this.dynamicTitle, this), this.noResults = e(this.noResults, this), this.updateBreadcrumb = e(this.updateBreadcrumb, this), this.onPjaxEnd = e(this.onPjaxEnd, this), this.listeners = e(this.listeners, this), i.__super__.constructor.apply(this, arguments), this.container = $("#library-pjax"), _.delay(this.listeners, 100), _.delay(this.dynamicTitle, 200)
            }
            return s(i, t), i.prototype.listeners = function() {
                return this.container.on("pjax:end", this.onPjaxEnd), this.filters = new Filters({
                    basePath: "library",
                    container: "#library-pjax",
                    binds: {
                        topic: Featurette.get("topic"),
                        type: Featurette.get("type"),
                        q: $("#q"),
                        sort: Featurette.get("sort")
                    }
                }), this.on("click", ".form-search .search-button", function(t) {
                    return function(e) {
                        return t.filters.update(e)
                    }
                }(this))
            }, i.prototype.onPjaxEnd = function() {
                return this.updateBreadcrumb(), this.dynamicTitle(), this.noResults()
            }, i.prototype.updateBreadcrumb = function() {
                return $(document).trigger("library:updated", "/library")
            }, i.prototype.noResults = function() {
                return $("#no-results").hide(), 0 === this.container.find(":not(#upcoming-releases) ul.card-list li.card").length ? $("#no-results").stop().show() : void 0
            }, i.prototype.dynamicTitle = function() {
                return $(".primary-heading h1").html($(".topic-heading").length > 0 ? "<a class='all-topics' href='/library'><span class='icon icon-left'></span> Library</a>" : "Library"), $(document).on("click", "a.all-topics", function(t) {
                    return t.preventDefault(), Featurette.get("topic").val("")
                })
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.showTabOnLoad = e(this.showTabOnLoad, this), this.showTabContent = e(this.showTabContent, this), i.__super__.constructor.apply(this, arguments), this.on("click", "[data-toggle]", this.showTabContent), this.showTabOnLoad()
            }
            return s(i, t), i.prototype.showTabContent = function(t) {
                var e;
                return t.preventDefault(), this.currentTarget = $(t.currentTarget), e = this.currentTarget.data("toggle"), this.currentTarget.addClass("primary").siblings().removeClass("primary"), $("#" + e + "-container").addClass("selected").siblings().removeClass("selected"), window.location.hash = e
            }, i.prototype.showTabOnLoad = function() {
                return "#who-uses-it" === window.location.hash ? this.get('[data-toggle="who-uses-it"]').trigger("click") : "#how-it-works" === window.location.hash ? this.get('[data-toggle="how-it-works"]').trigger("click") : void 0
            }, i
        }(Treehouse.View), Featurette.register("marketing-features", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.scrollOffsetForEl = e(this.scrollOffsetForEl, this), this.onScroll = e(this.onScroll, this), this.el = $(t), $(window).on("scroll", this.onScroll)
            }
            return t.prototype.defaultScrollOffset = $(window).height() > 620 && $(window).width() > 640 ? 160 : 0, t.prototype.onScroll = function() {
                var t, e, i, s, r, o;
                i = $(window).scrollTop(), s = $(window).height(), r = this.animations, o = [];
                for (e in r) t = r[e], o.push(t.call(this, i, s));
                return o
            }, t.prototype.scrollOffsetForEl = function(t, e, i) {
                return null == i && (i = this.defaultScrollOffset), t.offset().top - e + i
            }, t.prototype.animations = {
                collectionViews: function(t, e) {
                    var i, s;
                    return i = $("#collectionView"), s = this.scrollOffsetForEl(i, e - this.defaultScrollOffset), t > s ? i.addClass("activated") : void 0
                },
                apis: function(t, e) {
                    var i, s;
                    return i = $("#apis"), s = this.scrollOffsetForEl(i, e - this.defaultScrollOffset), t > s ? i.addClass("activated") : void 0
                },
                gestures: function(t, e) {
                    var i, s;
                    return i = $("#gestures"), s = this.scrollOffsetForEl(i, e - this.defaultScrollOffset), t > s ? i.addClass("activated") : void 0
                }
            }, t
        }(), Featurette.register("marketing-photo-bomber", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.scrollOffsetForEl = e(this.scrollOffsetForEl, this), this.onScroll = e(this.onScroll, this);
                var i;
                this.el = $(t), i = $(window).height(), $(window).on("scroll", this.onScroll), i > 800 && $(document).trigger("scroll")
            }
            return t.prototype.defaultScrollOffset = 100, t.prototype.onScroll = function() {
                var t, e, i, s, r, o;
                i = $(window).scrollTop(), s = $(window).height(), r = this.animations, o = [];
                for (e in r) t = r[e], o.push(t.call(this, i, s));
                return o
            }, t.prototype.scrollOffsetForEl = function(t, e, i) {
                return null == i && (i = this.defaultScrollOffset), t.offset().top - e + i
            }, t.prototype.animations = {
                schoolsTracks: function(t, e) {
                    var i, s;
                    return i = $('[data-trigger-animation="schools_tracks"]'), s = this.scrollOffsetForEl(i, e - this.defaultScrollOffset), t > s ? i.addClass("activated") : void 0
                },
                schoolsResources: function(t, e) {
                    var i, s;
                    return i = $('[data-trigger-animation="schools_resources"]'), s = this.scrollOffsetForEl(i, e - this.defaultScrollOffset), t > s ? i.addClass("activated") : void 0
                },
                schoolsDash: function(t, e) {
                    var i, s;
                    return i = $('[data-trigger-animation="schools_dash"]'), s = this.scrollOffsetForEl(i, e - this.defaultScrollOffset), t > s ? i.addClass("activated") : void 0
                },
                schoolsDesk: function(t, e) {
                    var i, s;
                    return i = $('[data-trigger-animation="schools_desk"]'), s = this.scrollOffsetForEl(i, e - this.defaultScrollOffset), t > s ? i.addClass("activated") : void 0
                }
            }, t
        }(), Featurette.register("marketing-schools", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t() {
                $(".space-cat-play").on("click", function() {
                    return $(".space-cat-trailer").removeClass("hide"), $(".hero-title").addClass("hide"), $(".mejs-mediaelement video").get(0).play()
                }), $(".close-video").on("click", function() {
                    return $(".space-cat-trailer").addClass("hide"), $(".hero-title").removeClass("hide"), $(".mejs-mediaelement video").get(0).stop()
                })
            }
            return t
        }(), Featurette.register("marketing-space-cat", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.listeners = e(this.listeners, this), this.element = $(t), this.container = $("#users-stats-pjax"), _.delay(this.listeners, 100)
            }
            return t.prototype.listeners = function() {
                return this.container.on("pjax:end", this.noResults), this.filters = new Filters({
                    basePath: "account/users/stats",
                    container: "#users-stats-pjax",
                    binds: {
                        within: Featurette.get("within")
                    }
                })
            }, t
        }(), Featurette.register("users-stats", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.listeners = e(this.listeners, this), i.__super__.constructor.apply(this, arguments), _.defer(this.listeners)
            }
            return s(i, t), i.prototype.listeners = function() {
                return this.filters = new Filters({
                    basePath: "workspaces",
                    container: "#workspaces-pjax",
                    binds: {
                        q: this.get("#q"),
                        sort: Featurette.get("sort"),
                        env: Featurette.get("env"),
                        content: Featurette.get("content-filter")
                    }
                }), $(document).trigger("filters:serialized")
            }, i
        }(Treehouse.View), Featurette.register("workspaces-index", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.element = $(t), this.details = $("#" + this.element.data("details")), this.element.find("a.btn-perks").on("click", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.show()
                    }
                }(this)), this.element.find(".selection a").on("click", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.hide()
                    }
                }(this)), this.details.find(".offer-close").on("click", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.hide()
                    }
                }(this)), this.details.find("form").on("submit", function(t) {
                    return function(e) {
                        return $.ajax({
                            type: "post",
                            url: t.details.find("form").attr("action"),
                            headers: {
                                "X-CSRF-Token": $("meta[name='csrf-token']").attr("content")
                            },
                            data: {
                                _method: "PUT"
                            },
                            success: function() {
                                return t.details.find(".offer-form").hide(), t.details.find(".thank-you").show()
                            }
                        }), e.preventDefault()
                    }
                }(this))
            }
            return t.prototype.show = function() {
                return $(".expanded:visible").each(function(e, i) {
                    return t.hideExpandedDetails($(i))
                }), $(".selection:visible").fadeOut(200), this.details.length > 0 ? ($(window).width() <= 767 && (this.details.after('<div class="placeholder-' + this.details.attr("id") + '"></div>'), this.element.parent().after(this.details)), this.details.slideDown(200, function(t) {
                    return function() {
                        return $("html, body").delay(200).animate({
                            scrollTop: t.details.offset().top - 100
                        }, 200)
                    }
                }(this)), this.element.find(".selection").fadeIn(200)) : Featurette.get("perk-not-available").showOverlay()
            }, t.prototype.hide = function() {
                return this.details.length > 0 ? (this.element.find(".selection").fadeOut(200), t.hideExpandedDetails(this.details)) : void 0
            }, t.hideExpandedDetails = function(t) {
                return t.slideUp(200, function() {
                    return $(window).width() <= 767 ? ($(".placeholder-" + t.attr("id")).after(t), $(".placeholder-" + t.attr("id")).remove()) : void 0
                })
            }, t
        }(), Featurette.register("perk", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.createChart(t)
            }
            return t.prototype.createChart = function(t) {
                var e, i, s, r, o, n, a, l, h;
                e = window.topicColors, s = $(t), a = s.data("points"), r = s.data("cutout-percent") || 55, i = [], l = 0;
                for (n in a) h = a[n], l += h, i.push({
                    y: h,
                    color: e[n]
                });
                return 0 === l && i.push({
                    y: 1,
                    color: "#D4D9DD"
                }), o = $(t).data("inner-size"), $(t).highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: !1,
                        backgroundColor: null,
                        height: s.data("height"),
                        width: s.data("width"),
                        spacingTop: 0,
                        spacingBottom: 0,
                        spacingLeft: 0,
                        spacingRight: 0
                    },
                    title: {
                        text: ""
                    },
                    tooltip: {
                        enabled: !1
                    },
                    exporting: {
                        enabled: !1
                    },
                    credits: {
                        enabled: !1
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: !1
                            },
                            startAngle: -180,
                            endAngle: 180,
                            center: ["50%", "50%"]
                        }
                    },
                    series: [{
                        type: "pie",
                        name: "Browser share",
                        innerSize: o,
                        borderWidth: 0,
                        states: {
                            hover: {
                                enabled: !1
                            }
                        },
                        data: i
                    }]
                })
            }, t
        }(), Featurette.register("points-chart", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.collapsePoints = e(this.collapsePoints, this), this.expandPoints = e(this.expandPoints, this), this.el = $(t), this.total_div = this.el.find("#total-points"), this.small_donut = this.total_div.find(".points-donut"), this.expanded_div = this.el.find("#expanded-points"), this.toggle = this.el.find("a.toggle"), this.toggle_arrow = this.toggle.find("span"), this.started_collapsed = this.total_div.hasClass("collapsed"), this.current_state = this.started_collapsed ? "collapsed" : "expanded", this.animationTime = 350, this.animating = !1, this.toggle.click(function(t) {
                    return function(e) {
                        return e.preventDefault(), t.animating ? void 0 : (t.animating = !0, "collapsed" === t.current_state ? (t.current_state = "expanded", t.expandPoints()) : (t.current_state = "collapsed", t.collapsePoints()))
                    }
                }(this))
            }
            return t.prototype.expandPoints = function() {
                return this.started_collapsed ? this.toggle_arrow.css("animation", "arrowRotateUp .35s") : this.toggle_arrow.css("animation", "arrowRotateDown .35s"), this.expanded_div.slideDown(this.animationTime), this.total_div.animate({
                    "margin-bottom": "+=30px",
                    "padding-bottom": "+=25px"
                }, this.animationTime, function(t) {
                    return function() {
                        return t.animating = !1, t.total_div.removeClass("collapsed", 100), t.started_collapsed ? t.toggle_arrow.css("transform", "rotate(180deg)") : t.toggle_arrow.css("transform", "rotate(0deg)")
                    }
                }(this)), this.small_donut.fadeOut(100), this.total_div.find("h1").animate({
                    "padding-left": "-=80",
                    queue: !1
                }, this.animationTime), this.total_div.find("p").animate({
                    "padding-left": "-=80",
                    queue: !1
                }, this.animationTime)
            }, t.prototype.collapsePoints = function() {
                return this.started_collapsed ? this.toggle_arrow.css("animation", "arrowRotateDown .35s") : this.toggle_arrow.css("animation", "arrowRotateUp .35s"), this.expanded_div.slideUp(this.animationTime), this.total_div.addClass("collapsed", 100), this.total_div.find("h1").css({
                    "padding-left": "0px"
                }), this.total_div.find("p").css({
                    "padding-left": "0px"
                }), this.total_div.animate({
                    "margin-bottom": "-=30px",
                    "padding-bottom": "-=25px"
                }, this.animationTime, function(t) {
                    return function() {
                        return t.started_collapsed ? t.toggle_arrow.css("transform", "rotate(0deg)") : t.toggle_arrow.css("transform", "rotate(180deg)"), t.total_div.find("h1").animate({
                            "padding-left": "+=80"
                        }, t.animationTime - 100), t.total_div.find("p").animate({
                            "padding-left": "+=80"
                        }, t.animationTime - 100), t.small_donut.fadeIn(t.animationTime - 100, function() {
                            return t.animating = !1
                        })
                    }
                }(this))
            }, t
        }(), Featurette.register("points-expander", t)
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("radial-progress", t = function(t) {
            function e() {
                e.__super__.constructor.apply(this, arguments), this.progress = (parseInt(this.get(".progress").text(), 10) || 0) / 100, this.stroke = this.data.stroke ? parseInt(this.data.stroke, 10) : 8, this.render()
            }
            return i(e, t), e.prototype.render = function() {
                var t, e, i, s;
                return t = 100 - this.stroke, e = t / 2, s = '<svg width="100%" height="100%" viewBox="0 0 100 100">\n  <path class="background" fill="none" stroke-width="' + this.stroke + '" d="\n    M50,' + this.stroke / 2 + "\n    a" + e + "," + e + " 0 0,1 0," + t + "\n    a" + e + "," + e + " 0 0,1 0," + -t + '\n  "/>\n  <path class="foreground" fill="none" stroke-width="' + this.stroke + '" d="\n    M50,' + this.stroke / 2 + "\n    a" + e + "," + e + " 0 0,1 0," + t + "\n    a" + e + "," + e + " 0 0,1 0," + -t + '\n  "/>\n</svg>', this.el.append(s), this.path = this.el.find("path.foreground")[0], this.pathLength = this.path.getTotalLength(), this.path.style.strokeDasharray = "" + this.pathLength + " " + this.pathLength, this.data.animate ? (i = this.progress, this.setProgress(0), _.defer(function(t) {
                    return function() {
                        return t.setProgress(i)
                    }
                }(this))) : this.setProgress(this.progress)
            }, e.prototype.setProgress = function(t) {
                return this.progress = Math.max(0, Math.min(t, 1)), this.get(".progress").text(Math.round(100 * this.progress) + "%"), this.path.style.strokeDashoffset = this.pathLength - this.progress * this.pathLength, this.el.toggleClass("unstarted", 0 === this.progress)
            }, e
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {
                this.scrollButton = e(this.scrollButton, this), this.scrollButton()
            }
            return t.prototype.scrollButton = function() {
                var t, e, i;
                return e = $('[data-featurette="scroll-button"]'), t = $("[data-scroll-stop]"), i = t.offset().top, e.on("click", function(t) {
                    return t.preventDefault(), $("html, body").animate({
                        scrollTop: i
                    }, 600)
                })
            }, Featurette.register("scroll-button", t), t
        }()
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.element = $(t), this.base_url = this.element.data("remote-path"), this.has_query_string = this.base_url.indexOf("?") > 0, this.page = 1, this.element.click(function(t) {
                    return function() {
                        var e;
                        return t.page += 1, e = t.has_query_string ? t.base_url + ("&page=" + t.page) : t.base_url + ("?page=" + t.page), $.ajax({
                            url: e,
                            type: "get",
                            dataType: "script"
                        })
                    }
                }(this))
            }
            return t
        }(), Featurette.register("show-more", t)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.SignupForm = function(e) {
            function s() {
                this.clearFormErrors = t(this.clearFormErrors, this), this.unwrapErrors = t(this.unwrapErrors, this), this.setupCardTokenizer = t(this.setupCardTokenizer, this), this.displayValidationError = t(this.displayValidationError, this), this.displayCardTokenizerError = t(this.displayCardTokenizerError, this), this.displayFormError = t(this.displayFormError, this), this.displayValidationErrors = t(this.displayValidationErrors, this), this.finalizeForm = t(this.finalizeForm, this), this.validateFields = t(this.validateFields, this), this.onFormSubmit = t(this.onFormSubmit, this), this.togglePaymentMethod = t(this.togglePaymentMethod, this), this.switchToAnnual = t(this.switchToAnnual, this), this.switchToMonthly = t(this.switchToMonthly, this), s.__super__.constructor.apply(this, arguments), this.body = $("body"), this.form = this.get("form"), this.accountValidator = new Treehouse.AccountDetailsValidator(this.form), this.creditCardValidator = new Treehouse.CreditCardValidator(this.form), this.on("change", "input[name='account_signup[payment_method]']", this.togglePaymentMethod), this.on("click", "#show-trial-payment-info", this.toggleTrialPaymentInfo), this.on("mouseenter", "#cvv-tooltip", this.showCvvTooltip), this.on("mouseleave", "#cvv-tooltip", this.hideCvvTooltip), this.on("click", "#subscribe_monthly", this.switchToMonthly), this.on("click", "#subscribe_annually", this.switchToAnnual), this.on("submit", this.form, this.onFormSubmit), this.setupCardTokenizer(), this.togglePaymentMethod()
            }
            return i(s, e), s.prototype.switchToMonthly = function() {
                var t;
                return this.get("#subscribe_monthly").addClass("selected"), this.get("#subscribe_annually").removeClass("selected"), this.get("#monthly-checkmark").show(), this.get("#annual-checkmark").hide(), this.get("#account_signup_billing_period_monthly").attr("checked", "yes"), t = $.trim($("#monthly-charge").html()), this.get("#footer-price").html(t)
            }, s.prototype.switchToAnnual = function() {
                var t;
                return this.get("#subscribe_monthly").removeClass("selected"), this.get("#subscribe_annually").addClass("selected"), this.get("#monthly-checkmark").hide(), this.get("#annual-checkmark").show(), this.get("#account_signup_billing_period_annual").attr("checked", "yes"), t = $.trim($("#annual-charge").html()), this.get("#footer-price").html(t)
            }, s.prototype.showCvvTooltip = function() {
                return $(this).find(".tooltip").css("display", "block")
            }, s.prototype.hideCvvTooltip = function() {
                return $(this).find(".tooltip").hide()
            }, s.prototype.toggleTrialPaymentInfo = function(t) {
                return t.preventDefault(), this.get("#trial-payment-info").slideToggle()
            }, s.prototype.togglePaymentMethod = function() {
                switch (this.paymentMethod = this.get("input[name='account_signup[payment_method]']").filter(":checked").val(), this.paymentMethod) {
                    case "paypal":
                        return this.get(".bitcoin-chosen").hide(), this.get(".credit-card-chosen").hide(), this.get(".paypal-chosen").show();
                    case "credit_card":
                        return this.get(".paypal-chosen").hide(), this.get(".bitcoin-chosen").hide(), this.get(".credit-card-chosen").show();
                    case "bitcoin":
                        return this.get(".paypal-chosen").hide(), this.get(".credit-card-chosen").hide(), this.get(".bitcoin-chosen").show()
                }
            }, s.prototype.onFormSubmit = function(t) {
                return t.preventDefault(), t.stopPropagation(), this.validateFields() ? "credit_card" === this.paymentMethod ? this.cardTokenizer.tokenizeCard(this.get("#credit_card_number").val(), this.get("#credit_card_month").val(), this.get("#credit_card_year").val(), this.get("#credit_card_cvv").val()) : this.finalizeForm() : this.displayFormError("It looks like there was an error in the information you gave us. Take a look at your sign-up form for more details.")
            }, s.prototype.validateFields = function() {
                return this.clearFormErrors(), this.accountValidator.validate(), "credit_card" === this.paymentMethod && "gte13" === this.get("#account_signup_age_check").val() && this.creditCardValidator.validate(), this.errors = $.extend({}, this.accountValidator.errors, this.creditCardValidator.errors), Object.keys(this.errors).length ? (this.displayValidationErrors(), !1) : !0
            }, s.prototype.finalizeForm = function() {
                return this.get("#credit_card_number").val(""), this.get("#credit_card_cvv").val(""), this.form.get(0).submit()
            }, s.prototype.displayValidationErrors = function() {
                var t, e, i, s;
                i = this.errors, s = [];
                for (e in i) t = i[e], s.push(this.displayValidationError(this.get("#" + e), t));
                return s
            }, s.prototype.displayFormError = function(t) {
                var e;
                return e = $(HoganTemplates["signup/form_message"].render({
                    container_class: "error",
                    message: t
                })), this.formError = new Featurette.registered_features["global-message-container"](e.get(0)), this.body.animate({
                    scrollTop: 0
                }, 0, function(t) {
                    return function() {
                        return setTimeout(function() {
                            return t.body.prepend(e)
                        }, 100)
                    }
                }(this))
            }, s.prototype.displayCardTokenizerError = function() {
                return this.displayValidationError(this.get("#credit_card_number"), "There was a problem verifying your credit card details.")
            }, s.prototype.displayValidationError = function(t, e) {
                var i, s;
                return i = t, t.is("select") && (i = t.parent()), i.siblings("label").wrap('<div class="field_with_errors" />'), i.wrap('<div class="field_with_errors" />'), s = HoganTemplates["signup/field_error"].render({
                    error: e
                }), i.after(s)
            }, s.prototype.setupCardTokenizer = function() {
                var t;
                return (t = this.form.data("tokenizer-config")) ? this.cardTokenizer = new Treehouse.CreditCardTokenizer(this.form.get(0).id, {
                    client_token: t.client_token,
                    merchant_id: t.merchant_id,
                    environment: BraintreeData.environments[t.environment]
                }, this.finalizeForm, this.displayCardTokenizerError) : void 0
            }, s.prototype.unwrapErrors = function() {
                return this.get(".form-item").each(function() {
                    var t;
                    return t = $(this).find(".field_with_errors"), t.find("p.error-message").remove(), t.children().unwrap()
                })
            }, s.prototype.clearFormErrors = function() {
                return this.creditCardValidator.clearErrors(), this.accountValidator.clearErrors(), this.hasErrors = !1, this.unwrapErrors()
            }, s
        }(Treehouse.View), Featurette.register("signup-form", Treehouse.SignupForm)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.pingItGood = e(this.pingItGood, this), this.pingStyles = e(this.pingStyles, this), this.el = $(t), setInterval(this.pingItGood, 5e3), this.location = this.el.data("location")
            }
            return t.prototype.pingStyles = function() {
                return {
                    position: "absolute",
                    top: this.el.position().top,
                    left: this.el.position().left,
                    width: this.el.width() + parseInt(this.el.css("border-top-width")) + parseInt(this.el.css("border-bottom-width")),
                    height: this.el.height() + parseInt(this.el.css("border-left-width")) + parseInt(this.el.css("border-right-width")),
                    marginTop: this.el.css("margin-top"),
                    marginBottom: this.el.css("margin-bottom"),
                    marginLeft: this.el.css("margin-left"),
                    marginRight: this.el.css("margin-right"),
                    borderTopLeftRadius: this.el.css("border-top-left-radius"),
                    borderTopRightRadius: this.el.css("border-top-right-radius"),
                    borderBottomLeftRadius: this.el.css("border-bottom-left-radius"),
                    borderBottomRightRadius: this.el.css("border-bottom-right-radius"),
                    zIndex: this.el.css("z-index") - 1,
                    animation: "sonarPing" + this.location + " 1.3s ease-out 250ms"
                }
            }, t.prototype.pingItGood = function() {
                return this.ping && this.ping.remove(), this.ping = $('<span class="ping"></span>').css(this.pingStyles()), this.el.after(this.ping)
            }, t
        }(), Featurette.register("sonar-ping", t)
    }.call(this),
    function() {
        var t, e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        t = function(t) {
            function e(t) {
                this.updateChart(t)
            }
            return i(e, t), e.prototype.updateChart = function(t) {
                return this.setTitleAndLabel(t), this.createChart(t)
            }, e.prototype.setTitleAndLabel = function(t) {
                var e, i, s;
                return e = $(t), s = e.find(".title").first(), $(s).text(e.data("title")), i = e.find(".label").first(), $(i).text(e.data("label"))
            }, e.prototype.createChart = function(t) {
                var e, i, s, r, o, n, a;
                for (e = $(t).find(".chart").first(), r = $(t).data("stats"), o = $(t).data("tooltip-label"), s = $(t).data("line-color"), n = 0, a = r.length; a > n; n++) i = r[n], i[0] = new Date(i[0]).getTime();
                return $(e).highcharts({
                    chart: {
                        renderTo: "chart",
                        defaultSeriesType: "spline",
                        spacingBottom: 10,
                        spacingTop: 10,
                        spacingLeft: 0,
                        spacingRight: 0,
                        backgroundColor: "transparent",
                        alignTicks: !1
                    },
                    title: {
                        text: null
                    },
                    credits: {
                        enabled: !1
                    },
                    tooltip: {
                        backgroundColor: "#3e474f",
                        borderColor: "#3e474f",
                        borderRadius: "8",
                        useHTML: !0,
                        style: {
                            color: "#fff",
                            padding: "15px",
                            lineHeight: "18px"
                        },
                        dateTimeLabelFormats: {
                            day: "%b %e",
                            month: "%b",
                            week: "%b %e",
                            millisecond: "",
                            second: "",
                            minute: "",
                            hour: ""
                        }
                    },
                    xAxis: {
                        type: "datetime",
                        dateTimeLabelFormats: {
                            day: "%b %e",
                            month: "%b",
                            week: "%b %e"
                        },
                        title: {
                            text: null
                        },
                        labels: {
                            useHTML: !0,
                            style: {
                                color: "#8d9aa5",
                                paddingTop: "5px"
                            }
                        }
                    },
                    yAxis: {
                        floor: 0,
                        maxPadding: 0,
                        minPadding: 0,
                        gridLineDashStyle: "dash",
                        title: {
                            text: null
                        },
                        labels: {
                            style: {
                                color: "#8d9aa5"
                            }
                        }
                    },
                    plotOptions: {
                        series: {
                            marker: {
                                radius: 3
                            }
                        }
                    },
                    series: [{
                        showInLegend: !1,
                        name: o,
                        color: s,
                        data: r
                    }]
                })
            }, e
        }(Treehouse.View), Featurette.register("stats-line-chart", t)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("tabbed-content", Treehouse.TabbedContent = function(e) {
            function s() {
                this.switchTabs = t(this.switchTabs, this), this.showContent = t(this.showContent, this), this.getContent = t(this.getContent, this), s.__super__.constructor.apply(this, arguments), this.on("click", "> .tabs ul li", this.switchTabs), this.showContent(0)
            }
            return i(s, e), s.prototype.getContent = function(t) {
                return this.el.find("> .tabbed-content > [data-tab-content]").eq(t)
            }, s.prototype.showContent = function(t) {
                return this.getContent(t).show().siblings().hide()
            }, s.prototype.switchTabs = function(t) {
                var e;
                return t.preventDefault(), e = $(t.currentTarget), e.addClass("current").siblings().removeClass("current"), this.showContent(e.index()), this.isMobile() ? this.scrollTo(this.getContent(e.index()).offset().top) : void 0
            }, s
        }(Treehouse.Layout))
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Treehouse.CourseTrailersTooltip = function() {
            function e(e) {
                this.dismiss = t(this.dismiss, this);
                var i;
                this.el = $(e), i = $.cookie("hide_course_trailers_tooltip"), "true" === i && this.el.remove(), $(this.el.data("dismisser-selector")).on("click", function(t) {
                    return function() {
                        return t.dismiss(), t.el.trigger("course_trailers_tooltip:dismiss")
                    }
                }(this)), $("body").on("course_trailers_tooltip:dismiss", function(t) {
                    return function() {
                        return t.dismiss()
                    }
                }(this))
            }
            return e.prototype.dismiss = function() {
                return $.cookie("hide_course_trailers_tooltip", "true"), this.el.hide()
            }, e
        }(), Featurette.register("course-trailers-tooltip", Treehouse.CourseTrailersTooltip)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Featurette.register("group-dashboard-chart-tooltip", function() {
            function e(e) {
                this.onMouseMove = t(this.onMouseMove, this), this.el = $(e), this.data = this.el.data(), this.tooltip = this.el.find(".dashboard-tooltip"), $("body").on("scroll mousemove", _.throttle(this.onMouseMove, 35))
            }
            return e.prototype.onMouseMove = function(t) {
                var e, i, s, r, o;
                return e = this.el.find(".bar:hover"), e.length ? (i = e.data("date"), o = e.data("students"), s = t.pageX, r = t.pageY, this.tooltip.addClass("active").offset({
                    top: r - 90,
                    left: s - 110
                }).find(".value").text(o).end().find(".date").text(i)) : this.tooltip.removeClass("active")
            }, e
        }())
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Featurette.register("info-tooltip", t = function() {
            function t(t) {
                this.closeToolip = e(this.closeToolip, this), this.toggleTooltip = e(this.toggleTooltip, this), this.hideTooltip = e(this.hideTooltip, this), this.showTooltip = e(this.showTooltip, this), this.el = $(t), this.tooltip = this.el.find(".tooltip"), this.displaying = !1, "click" === this.el.data("event") ? (this.el.on("click", this.toggleTooltip), $(document).on("click", this.closeToolip)) : (this.tooltip.hide(), this.el.on("mouseover", this.showTooltip), this.el.on("mouseout", this.hideTooltip))
            }
            return t.prototype.showTooltip = function(t) {
                return !this.displaying && $(t.target).is(this.el) ? (this.tooltip.show(), this.displaying = !0, t.stopPropagation()) : void 0
            }, t.prototype.hideTooltip = function(t) {
                return this.displaying && $(t.target).is(this.el) ? (this.tooltip.hide(), this.displaying = !1, t.stopPropagation()) : void 0
            }, t.prototype.toggleTooltip = function(t) {
                return t.stopPropagation(), this.tooltip.toggleClass("tooltip-showing").parent().siblings().children().removeClass("tooltip-showing"), this.el.toggleClass("tooltip-showing").siblings().removeClass("tooltip-showing")
            }, t.prototype.closeToolip = function() {
                return this.tooltip.removeClass("tooltip-showing"), this.el.removeClass("tooltip-showing")
            }, t
        }())
    }.call(this),
    function() {
        Treehouse.Tooltip = function() {
            function t(t) {
                var e;
                this.id = t.id, e = $(t), e.hide(), this.class_to_close = e.attr("data-class-to-close"), e.find(".close-tooltip").click(function(t) {
                    return function() {
                        return t.close()
                    }
                }(this)), "true" !== e.attr("data-hide") && setTimeout(function() {
                    return e.fadeIn()
                }, 200)
            }
            return t.prototype.close = function() {
                var t, e;
                return t = $("#" + this.id), t.fadeOut(), this.class_to_close && $("." + this.class_to_close).fadeOut(), (e = t.attr("data-flag")) ? $.post("/dashboard/flag", {
                    _method: "PUT",
                    flag: e
                }) : void 0
            }, t
        }(), Featurette.register("tooltip", Treehouse.Tooltip)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("upgrade-tooltip", t = function(t) {
            function i() {
                this.init = e(this.init, this), i.__super__.constructor.apply(this, arguments), this.on("pjax:end", _.bind(this.init, this)), this.init()
            }
            return s(i, t), i.prototype.init = function() {
                return this.el.data("hide-tooltip") === !0 ? this.get(".upgrade-tooltip").remove() : void 0
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.setActiveTab = e(this.setActiveTab, this), this.loading = e(this.loading, this);
                var i;
                this.el = $(t), this.targetContainer = $("#courses-container"), this.el.pjax("a[data-pjax='true']", {
                    container: "#courses-container",
                    scrollTo: !1,
                    timeout: 0
                }), location.hash && (i = location.hash.split("#")[1], this.el.find("a[data-pjax='true'][href$='" + i + "']").click()), this.targetContainer.on("pjax:start", this.loading), this.targetContainer.on("pjax:end", this.setActiveTab), this.setActiveTab()
            }
            return t.prototype.loading = function() {
                return this.targetContainer.addClass("inactive")
            }, t.prototype.setActiveTab = function() {
                return this.targetContainer.removeClass("inactive"), this.el.find("a").removeClass("selected"), this.el.find("a[href$='" + window.location.pathname + "']").addClass("selected"), this.targetContainer.find(".achievement-list > li").length > 3 ? $(".roadmap-callout").show() : $(".roadmap-callout").hide(), "/library" !== location.pathname ? $("#featured-stages").hide() : $("#featured-stages").show()
            }, t
        }(), Featurette.register("topic-tabs", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.collapseList = e(this.collapseList, this), this.expandList = e(this.expandList, this), this.el = $(t), this.chevron = this.el.find(".icon-chevron-down"), this.text = this.el.find("#snapshot-state"), this.toggleElements = $(".full-view"), this.current_state = "collapsed", this.animationTime = 200, this.animating = !1, this.el.click(function(t) {
                    return function(e) {
                        return e.preventDefault(), t.animating ? void 0 : (t.animating = !0, "collapsed" === t.current_state ? (t.current_state = "expanded", t.expandList()) : (t.current_state = "collapsed", t.collapseList()))
                    }
                }(this))
            }
            return t.prototype.expandList = function() {
                return this.chevron.css("animation", "arrowRotateUp .20s"), this.text.html("Show snapshot"), this.toggleElements.slideToggle(this.animationTime, function(t) {
                    return function() {
                        return t.chevron.css("transform", "rotate(180deg)"), t.animating = !1
                    }
                }(this))
            }, t.prototype.collapseList = function() {
                return this.chevron.css("animation", "arrowRotateDown .20s"), this.text.html("Show all steps"), this.toggleElements.slideToggle(this.animationTime, function(t) {
                    return function() {
                        return t.chevron.css("transform", "rotate(0deg)"), t.animating = !1
                    }
                }(this))
            }, t
        }(), Featurette.register("track-snapshot-expander", t)
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t) {
                this.trailerShown = !1, this.toggleButton = $(t), this.toggleButton.click(function(t) {
                    return function() {
                        return t.toggle()
                    }
                }(this)), "#trailer" === window.location.hash && setTimeout(function(t) {
                    return function() {
                        return t.showTrailer()
                    }
                }(this), 60)
            }
            return t.prototype.toggle = function() {
                return this.trailerShown ? this.hideTrailer() : this.showTrailer()
            }, t.prototype.hideTrailer = function() {
                return $("video")[0].player.pause(), $("i", this.toggleButton).toggle(), $(".icon", this.toggleButton).toggle(), $(".trailer-backdrop").fadeOut(800, function() {
                    return $(".hero-meta").fadeIn(800)
                }), $("video")[0].player.setCurrentTime(0), this.trailerShown = !1
            }, t.prototype.showTrailer = function() {
                var t;
                return $(".hero-meta").fadeOut(300), t = $(".mejs-container").height() - 165, $(".hero").animate({
                    minHeight: t
                }, 300, function() {
                    return $(".trailer-backdrop").fadeIn(300, function() {
                        return $(".hero").css({
                            "min-height": "0"
                        })
                    })
                }), $("video")[0].player.play(), $("i", this.toggleButton).toggle(), $(".icon", this.toggleButton).toggle(), this.trailerShown = !0
            }, t
        }(), Featurette.register("trailer-trigger", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("upcoming-releases", t = function(t) {
            function i() {
                this.scrollToUpcomingReleases = e(this.scrollToUpcomingReleases, this), i.__super__.constructor.apply(this, arguments), this.on("click touchstart", this.scrollToUpcomingReleases)
            }
            return s(i, t), i.prototype.scrollToUpcomingReleases = function(t) {
                var e;
                return t.preventDefault(), $("#upcoming-releases").length > 0 ? (e = $("#upcoming-releases").offset().top - 100, $("html, body").animate({
                    scrollTop: e
                }, 300)) : void 0
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("video-player", t = function(t) {
            function i(t) {
                this.storePlaybackPreferences = e(this.storePlaybackPreferences, this), this.onLanguageSelect = e(this.onLanguageSelect, this), this.onVolumeChanged = e(this.onVolumeChanged, this), this.launchWorkspace = e(this.launchWorkspace, this), this.launchConsole = e(this.launchConsole, this), this.checkWorkspaceType = e(this.checkWorkspaceType, this), this.addWorkspacesButton = e(this.addWorkspacesButton, this), this.rewind = e(this.rewind, this), this.getSpeedsHTML = e(this.getSpeedsHTML, this), this.addSpeedControls = e(this.addSpeedControls, this), this.addRewindButton = e(this.addRewindButton, this), this.getIcon = e(this.getIcon, this), this.getIcons = e(this.getIcons, this), this.appendButton = e(this.appendButton, this), this.prependButton = e(this.prependButton, this), this.updateButton = e(this.updateButton, this), this.getButtonHTML = e(this.getButtonHTML, this), this.updateControls = e(this.updateControls, this), this.reset = e(this.reset, this), this.setSpeed = e(this.setSpeed, this), this.onSpeedChange = e(this.onSpeedChange, this), this.transitionToPlaying = e(this.transitionToPlaying, this), this.transitionToPaused = e(this.transitionToPaused, this), this.onEnd = e(this.onEnd, this), this.ensureCorrectPlaybackRate = e(this.ensureCorrectPlaybackRate, this), this.sendViewingSegment = e(this.sendViewingSegment, this), this.trackViewingSegment = e(this.trackViewingSegment, this), this.setMuted = e(this.setMuted, this), this.setStartTime = e(this.setStartTime, this), this.addEvents = e(this.addEvents, this), this.setControlsSize = e(this.setControlsSize, this), this.toggleMaxWidthState = e(this.toggleMaxWidthState, this), this.setVideoHeight = e(this.setVideoHeight, this), this.onResize = e(this.onResize, this);
                var s;
                i.__super__.constructor.apply(this, arguments), this.videoMaxWidth = 1280, this.cookieExpiration = 1095, this.language = this.data.startLanguage || $.cookie("captionLanguage"), this.playbackRate = parseFloat(this.data.playbackRate || $.cookie("playbackRate") || 1), this.videoProgressUrl = this.data.videoProgressUrl, this.resumeTime = parseInt(this.data.resume), this.data.autoplay && (this.autoplay = !0), s = {
                    enableAutosize: !0,
                    alwaysShowControls: this.el.hasClass("fixed-controls"),
                    success: this.addEvents,
                    startLanguage: this.language,
                    setDimensions: !1,
                    startVolume: $.cookie("volume") ? $.cookie("volume") : 1
                }, this.data.playbackPreferencesUrl && (this.playbackPreferencesUrl = this.data.playbackPreferencesUrl), this.player = new MediaElementPlayer(t, s), this.updateControls(), this.setMuted(), this.setSpeed(this.playbackRate), this.playing = !1, this.enableChromeFreezeFix(), this.resumeTime && $("#resume-video-overlay").addClass("active"), this.sendViewingSegment = _.throttle(_.bind(this.sendViewingSegment, this), 5e3), setInterval(function(t) {
                    return function() {
                        return t.playing ? t.sendViewingSegment(t.mejsObj.currentTime) : void 0
                    }
                }(this), 15e3)
            }
            return s(i, t), i.prototype.speeds = [.5, .75, 1, 1.1, 1.25, 1.5, 1.75, 2], i.prototype.onResize = function() {
                return this.setVideoHeight(), this.toggleMaxWidthState()
            }, i.prototype.setVideoHeight = function() {
                var t, e, i, s, r, o, n;
                return r = this.container.find("video"), n = $(window).height(), i = $("#account-info").outerHeight(!0), s = $("#stage-progress").height(), e = this.container.find(".mejs-controls").height(), t = i + s, o = this.player && this.player.isFullScreen ? n - e : n - t - e - 10, r.css("max-height", o)
            }, i.prototype.toggleMaxWidthState = function() {
                return this.container.toggleClass("max-width-reached", this.container.width() > this.videoMaxWidth + 20)
            }, i.prototype.setControlsSize = function() {
                return this.el.is(":visible") ? (this.player.setControlsSize(), clearInterval(this.interval)) : void 0
            }, i.prototype.addEvents = function(t) {
                var e;
                return this.container = this.el.parents(".mejs-container"), this.container.on("click", ".mejs-rewind-button", this.rewind).on("click", ".mejs-workspaces-button", this.checkWorkspaceType).on("click", ".mejs-speed", this.onSpeedChange).on("change", ".mejs-captions-selector input:radio", this.onLanguageSelect), this.mejsObj = t, t.addEventListener("loadedmetadata", this.setStartTime), t.addEventListener("pause", this.transitionToPaused), t.addEventListener("play", this.transitionToPlaying), t.addEventListener("timeupdate", this.trackViewingSegment), null != t.playbackRate && t.addEventListener("timeupdate", this.ensureCorrectPlaybackRate), t.addEventListener("ended", this.onEnd), t.addEventListener("volumechange", this.onVolumeChanged), this.interval = window.setInterval(this.setControlsSize, 1e3), this.container.addClass(this.el.attr("class")), this.listenTo(window, "resize", _.throttle(this.onResize, 750), {
                    triggerImmediately: !0
                }), $(window).bind("beforeunload", function(t) {
                    return function() {
                        t.sendViewingSegment(t.mejsObj.currentTime)
                    }
                }(this)), this.autoplay && (e = function() {
                    return t.play()
                }, _.delay(e, 1e3)), this.listenTo(".start-video, .rewatch-video, .resume-video", "click", function(e) {
                    return function(i) {
                        return e.startTime = $(i.currentTarget).hasClass("resume-video") ? e.resumeTime : 0, e.hideOverlays(), t.play()
                    }
                }(this))
            }, i.prototype.setStartTime = function() {
                return this.startTime ? this.mejsObj.setCurrentTime(this.startTime) : void 0
            }, i.prototype.setMuted = function() {
                return this.mejsObj && "true" === $.cookie("muted") ? this.mejsObj.setMuted(!0) : void 0
            }, i.prototype.trackViewingSegment = function() {
                return this.playing ? (null == this.startTime ? this.startTime = this.mejsObj.currentTime : Math.abs(this.currentTime - this.mejsObj.currentTime) > .6 && (this.sendViewingSegment(this.currentTime), this.startTime = this.mejsObj.currentTime), this.currentTime = this.mejsObj.currentTime) : void 0
            }, i.prototype.sendViewingSegment = function(t) {
                return null != this.startTime && t > this.startTime ? ($.ajax(this.videoProgressUrl, {
                    type: "PUT",
                    data: {
                        started: this.startTime,
                        ended: t,
                        preview: this.data.preview
                    },
                    timeout: 2e3
                }).success(function(t) {
                    return null != t.complete ? Treehouse.PointsCounter.updateTotalOnce() : void 0
                }), this.startTime = null) : void 0
            }, i.prototype.ensureCorrectPlaybackRate = function() {
                return this.playbackRate !== this.player.media.playbackRate ? this.setSpeed(this.playbackRate) : void 0
            }, i.prototype.onEnd = function() {
                var t;
                return this.player.isFullScreen && this.player.exitFullScreen(), t = $("#next-step-overlay"), t.addClass("active"), this.player.container.addClass("mejs-treehouse-is-ended").removeClass("mejs-treehouse-is-paused mejs-treehouse-is-playing"), $(document).trigger("video-ended"), !0
            }, i.prototype.transitionToPaused = function() {
                return this.playing = !1, this.sendViewingSegment(this.mejsObj.currentTime), this.player.container.addClass("mejs-treehouse-is-paused"), this.player.container.removeClass("mejs-treehouse-is-playing"), $(document).trigger("video-paused")
            }, i.prototype.transitionToPlaying = function() {
                return this.playing = !0, this.player.container.addClass("mejs-treehouse-is-playing"), this.player.container.removeClass("mejs-treehouse-is-paused"), this.setSpeed(this.playbackRate), $(document).trigger("video-playing"), setTimeout(this.maxWidthState, 500)
            }, i.prototype.onSpeedChange = function(t) {
                return this.setSpeed($(t.currentTarget).data("speed"))
            }, i.prototype.setSpeed = function(t) {
                var e, i;
                return t !== this.playbackRate && _.defer(this.storePlaybackPreferences), this.playbackRate = this.player.media.playbackRate = t, i = $("#" + this.player.id).find(".mejs-speed"), i.removeClass("current-speed"), i.filter("[data-speed='" + this.playbackRate + "']").addClass("current-speed"), e = $(".mejs-speed-button"), e.removeClass("mejs-speed-15x mejs-speed-2x"), this.playbackRate >= 2 ? e.addClass("mejs-speed-2x") : this.playbackRate >= 1.5 ? e.addClass("mejs-speed-15x") : void 0
            }, i.prototype.reset = function() {
                try {
                    return this.player.pause(), this.player.setCurrentTime(0)
                } catch (t) {}
            }, i.prototype.updateControls = function() {
                return this.updateButton("playpause", {
                    icons: ["play", "pause"]
                }), this.updateButton("volume"), this.updateButton("captions"), this.updateButton("fullscreen"), this.addSpeedControls(), this.addRewindButton(), this.addWorkspacesButton()
            }, i.prototype.getButtonHTML = function(t, e) {
                return '<div class="mejs-button mejs-' + t + '-button">' + e + "</div>"
            }, i.prototype.updateButton = function(t, e) {
                var i;
                return null == e && (e = {}), i = e.icons ? e.icons : [t], $("#" + this.player.id).find(".mejs-" + t + "-button button").html(this.getIcons(i))
            }, i.prototype.prependButton = function(t, e) {
                return $("#" + this.player.id).find(".mejs-duration-container").after(this.getButtonHTML(t, e))
            }, i.prototype.appendButton = function(t, e) {
                return $("#" + this.player.id).find(".mejs-controls").append(this.getButtonHTML(t, e))
            }, i.prototype.getIcons = function(t) {
                var e;
                return e = "", $(t).each(function(t) {
                    return function(i, s) {
                        return e += t.getIcon(s)
                    }
                }(this)), e
            }, i.prototype.getIcon = function(t) {
                return _.unescape(this.el.data("" + t + "-icon"))
            }, i.prototype.addRewindButton = function() {
                return this.prependButton("rewind", "<button>" + this.getIcon("rewind") + "</button>")
            }, i.prototype.addSpeedControls = function() {
                return null != this.player.media.playbackRate && "flash" !== this.player.media.pluginType ? this.prependButton("speed", "<button>" + this.getIcon("speed") + '</button> <div class="mejs-speed-controls"> <ol>' + this.getSpeedsHTML() + "</ol> </div>") : void 0
            }, i.prototype.getSpeedsHTML = function() {
                var t, e, i, s, r;
                for (e = "", r = this.speeds.reverse(), i = 0, s = r.length; s > i; i++) t = r[i], e += '<li class="mejs-speed" data-speed="' + t + '">' + t + 'x <span class="speed-tooltip">' + t + "x</span></li>";
                return e
            }, i.prototype.rewind = function() {
                return this.player.setCurrentTime(this.el.context.currentTime - 10)
            }, i.prototype.addWorkspacesButton = function() {
                var t;
                return this.el.data("workspaces") || this.el.data("console") ? (t = this.el.data("workspaces") ? "Workspace" : "Console", this.appendButton("workspaces", "<button data-track-click-event>" + this.getIcon("workspaces") + " Launch " + t + "</button>")) : void 0
            }, i.prototype.checkWorkspaceType = function(t) {
                return t.preventDefault(), this.player.isFullScreen && this.player.exitFullScreen(), this.el.data("console") ? this.launchConsole() : this.el.data("workspaces") ? this.launchWorkspace() : void 0
            }, i.prototype.launchConsole = function() {
                var t;
                return t = window.open("http://console.teamtreehouse.com:3388/window", null, "top=100,left=100,height=600,width=800,scrollbars=0,location=0,menubar=0,toolbar=0"), t ? void 0 : alert("It looks like your pop up blocker blocked the console window.")
            }, i.prototype.launchWorkspace = function() {
                return Featurette.get("launch-workspace-modal").showOverlay()
            }, i.prototype.enableChromeFreezeFix = function() {
                return this.el.on("error", function() {
                    var t, e;
                    return e = this, t = e.currentTime, $(e).one("loadeddata", function() {
                        return function() {
                            return e.currentTime = t
                        }
                    }(this)), setTimeout(function() {
                        return function() {
                            return e.load()
                        }
                    }(this), 100)
                })
            }, i.prototype.onVolumeChanged = function() {
                return $.cookie("volume", this.mejsObj.volume, {
                    expires: this.cookieExpiration
                }), $.cookie("muted", this.mejsObj.muted, {
                    expires: this.cookieExpiration
                })
            }, i.prototype.onLanguageSelect = function(t) {
                var e;
                return e = t.currentTarget.value, "none" === e && (e = null), e !== this.language ? (this.language = e, this.storePlaybackPreferences()) : void 0
            }, i.prototype.storePlaybackPreferences = function() {
                return $.cookie("captionLanguage", this.language, {
                    expires: this.cookieExpiration
                }), $.cookie("playbackRate", this.playbackRate, {
                    expires: this.cookieExpiration
                }), this.playbackPreferencesUrl ? $.post(this.playbackPreferencesUrl, {
                    language: this.language,
                    playback_rate: this.playbackRate
                }) : void 0
            }, i.prototype.hideOverlays = function() {
                return $("#resume-video-overlay, #next-step-overlay").removeClass("active")
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.enableForStudent = e(this.enableForStudent, this), this.removeWorkspaceNavHighlight = e(this.removeWorkspaceNavHighlight, this), this.highlightWorkspaceNav = e(this.highlightWorkspaceNav, this), this.findWorkspaceNav = e(this.findWorkspaceNav, this), this.addWorkspaceNav = e(this.addWorkspaceNav, this), this.onWizardClosed = e(this.onWizardClosed, this), this.onWizardOpened = e(this.onWizardOpened, this), this.onStepChanged = e(this.onStepChanged, this), this.selectExistingWorkspace = e(this.selectExistingWorkspace, this), i.__super__.constructor.apply(this, arguments), this.launchExistingWorkspaceButton = this.el.find(".step.existing-workspace .launch-button"), this.workspaceWelcomeIsPresent = this.steps.filter(".workspace-welcome").length > 0, this.workspaceWelcomeIsPresent && (this.currentStep = this.initialStep = 0, this.advanceStep(this.currentStep)), this.on("click", ".step.existing-workspace .workspace-heading a", this.selectExistingWorkspace)
            }
            return s(i, t), i.prototype.selectExistingWorkspace = function(t) {
                var e;
                return e = $(t.currentTarget), e.closest(".workspace-heading").addClass("selected").siblings().removeClass("selected"), this.launchExistingWorkspaceButton.data("id", e.data("workspace-id")), t.preventDefault()
            }, i.prototype.onStepChanged = function() {
                return this.workspaceWelcomeIsPresent && this.currentStep > 0 ? (this.initialStep = 1, this.removeWorkspaceNavHighlight()) : void 0
            }, i.prototype.onWizardOpened = function() {
                return this.workspaceWelcomeIsPresent ? (this.addWorkspaceNav(), 0 === this.currentStep && this.highlightWorkspaceNav(), this.enableForStudent()) : void 0
            }, i.prototype.onWizardClosed = function() {
                return i.__super__.onWizardClosed.apply(this, arguments), this.removeWorkspaceNavHighlight()
            }, i.prototype.addWorkspaceNav = function() {
                var t;
                if (!(this.findWorkspaceNav().length > 0)) return t = "<li>\n  <a href='/workspaces'>\n    <span class='icon icon-workspaces'></span>\n    <span class='nav-tooltip'>Workspaces</span>\n  </a>\n</li>", $(".global-nav .bottom-anchored").before(t)
            }, i.prototype.findWorkspaceNav = function() {
                return $(".global-nav a[href='/workspaces']")
            }, i.prototype.highlightWorkspaceNav = function() {
                var t;
                return t = this.findWorkspaceNav(), $("#shelf").css("z-index", 501), t.addClass("selected").css({
                    overflow: "visible"
                }), t.find(".nav-tooltip").css({
                    left: 70,
                    opacity: 1
                })
            }, i.prototype.removeWorkspaceNavHighlight = function() {
                var t;
                return $("#shelf").removeAttr("style"), t = this.findWorkspaceNav(), t.removeClass("selected").removeAttr("style"), t.find(".nav-tooltip").removeAttr("style")
            }, i.prototype.enableForStudent = function() {
                return $.post("/workspaces/enable_for_student")
            }, i
        }(Wizard), Featurette.register("launch-workspace-wizard", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.onTourClosed = e(this.onTourClosed, this), this.id = t.id, this.el = $(t), this.el.find(".close-tour").on("click", this.onTourClosed)
            }
            return t.prototype.onTourClosed = function(t) {
                return $.post("/workspaces/close_tour"), $(".workspace-example").closest("li").remove(), $(".workspace-welcome").remove(), null != t ? t.preventDefault() : void 0
            }, t
        }(), Featurette.register("workspaces-tour", t)
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t(t) {
                this.element = t, this.setCurrentOption = e(this.setCurrentOption, this), this.createSelect = e(this.createSelect, this), this.element.length && (this.createSelect(), setTimeout(function(t) {
                    return function() {
                        return t.setCurrentOption()
                    }
                }(this), 20))
            }
            return t.prototype.createSelect = function() {
                var t, e, i;
                return i = [], t = $("[data-ul-select]"), e = $("[data-ul-select-target]"), $("[data-ul-select]").find("a").each(function() {
                    var t, i, s;
                    return t = $(this).attr("href"), s = $(this).text(), i = $("<option />").attr("value", t).text(s), e.append(i)
                })
            }, t.prototype.setCurrentOption = function() {
                var t, e;
                return t = $("[data-ul-select-target]"), e = $("[data-ul-select]").find("a.selected").text(), e || (e = $("[data-ul-select]").find("a").first().text()), t.prev("span").text(e), $('option[value="' + window.location.pathname + '"]').attr("selected", !0)
            }, t
        }(), $(function() {
            return new t($("[data-ul-select]"))
        })
    }.call(this),
    function() {
        var TreehouseTour, __bind = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        TreehouseTour = function() {
            function TreehouseTour(t) {
                this.element = t, this.killTour = __bind(this.killTour, this), this.prevTourStep = __bind(this.prevTourStep, this), this.nextTourStep = __bind(this.nextTourStep, this), this.startTour = __bind(this.startTour, this), this.moveTour = __bind(this.moveTour, this), this.scrollStep = __bind(this.scrollStep, this), this.stepIndicator = __bind(this.stepIndicator, this), this.fadeOutStep = __bind(this.fadeOutStep, this), this.positionElement = __bind(this.positionElement, this), this.fadeInStep = __bind(this.fadeInStep, this), this.handleKeyEvent = __bind(this.handleKeyEvent, this), this.offscreenCheck = __bind(this.offscreenCheck, this), this.handlePosition = __bind(this.handlePosition, this), this.applyOffsets = __bind(this.applyOffsets, this), this.tourRefresh = __bind(this.tourRefresh, this), this.element.length && ($(document).on("tour:refresh", this.tourRefresh), $(document).on("pjax:end", function(t) {
                    return function() {
                        return _.delay(t.tourRefresh, 2500)
                    }
                }(this)), $(document).trigger("tour:refresh"), $(window).on("resize", _.throttle(function(t) {
                    return function() {
                        return $(window).width() < 1022 ? t.killTour() : void 0
                    }
                }(this), 200)))
            }
            return TreehouseTour.prototype.tourRefresh = function() {
                var t, e, i, s;
                return this.$modalTarp = $(".modal-tarp"), this.$tourContainer = $("[data-tour]"), this.$tourTips = this.$tourContainer.children("li"), this.$window = $(window), this.$body = $("body"), this.$headerElements = $("#content, .fixed-heading"), this.totalTourSteps = this.$tourTips.length - 1, this.windowHeight = this.$window.height(), this.windowWidth = this.$window.width(), this.modalTarpWidth = this.$modalTarp.outerWidth(), this.classToggleSpeed = 100, this.fadeSpeed = 300, this.smoothScrollSpeed = 400, this.currentStep = 0, this.parentCollection = [], this.tourControlBarClass = "tour-control-bar", this.tourBarPrevClass = "tour-prev", this.tourBarNextClass = "tour-next", this.tourBarCloseClass = "tour-close", this.tourStepIndicatorClass = "step-indicator", this.tourActionListClass = "tour-actions", this.tourTitle = this.$tourContainer.data("tour"), this.tourControlBar = "<div class='" + this.tourControlBarClass + " closed'><div><h3>" + this.tourTitle + "</h3><ul class='" + this.tourActionListClass + "'><li><a class='" + this.tourBarPrevClass + "' data-tour-trigger-prev>Previous Step</a></li><li class='" + this.tourStepIndicatorClass + "'><span>- of -</span></li><li><a class='" + this.tourBarNextClass + "' data-tour-trigger-step>Next Step</a></li><li><a class='" + this.tourBarCloseClass + "' data-tour-trigger-death>Close Tour</a></li></ul></div></div>", this.applyOffsets(), this.$body.append(this.tourControlBar), this.$tourContainer.children("a").on("click", function(t) {
                    return t.preventDefault()
                }), i = "[data-tour-trigger-start]", s = "[data-tour-trigger-step]", e = "[data-tour-trigger-prev]", t = "[data-tour-trigger-death]", $(i).off("click", this.startTour), $(s).off("click", this.nextTourStep), $(e).off("click", this.prevTourStep), $(t).off("click", this.killTour), $(i).on("click", this.startTour), $(s).on("click", this.nextTourStep), $(e).on("click", this.prevTourStep), $(t).on("click", this.killTour), $(document).keydown(this.handleKeyEvent)
            }, TreehouseTour.prototype.applyOffsets = function() {
                return $(this.$tourTips).each(function() {
                    var t, e;
                    return e = $(this).data("tour-step-selector"), t = $(e).offset().top, $(this).attr("data-offset", t)
                })
            }, TreehouseTour.prototype.handlePosition = function(t, e) {
                var i, s;
                return s = t.data("tour-position"), i = this.offscreenCheck(t, e), i && ("top" === s ? s = "bottom" : "right" === s ? s = "left" : "bottom" === s ? s = "top" : "left" === s && (s = "right")), t.attr("data-tour-position", s), t.css({
                    left: e[s].left,
                    top: e[s].top
                })
            }, TreehouseTour.prototype.offscreenCheck = function(t, e) {
                var i, s, r;
                return r = t.offset(), s = t.data("tour-position"), i = !1, "top" === s ? i = e[s].top < 0 : "right" === s ? i = e[s].left + t.outerWidth() > this.windowWidth : "bottom" === s ? i = e[s].top + t.height() > $(document).height() : "left" === s && (i = e[s].left < 0), i
            }, TreehouseTour.prototype.handleKeyEvent = function(t) {
                var e, i, s, r;
                if (s = "[data-tour-trigger-start]", r = "[data-tour-trigger-step]", i = "[data-tour-trigger-prev]", e = "[data-tour-trigger-death]", this.$modalTarp.hasClass("tarp-opened")) switch (t.keyCode) {
                    case 27:
                        return this.killTour(), $(e).addClass("active"), setTimeout(function() {
                            return $(e).removeClass("active")
                        }, this.classToggleSpeed);
                    case 37:
                        return $(i).hasClass("inactive-step") || ($(i).addClass("active"), setTimeout(function() {
                            return $(i).removeClass("active")
                        }, this.classToggleSpeed)), this.prevTourStep();
                    case 39:
                        return $(r).hasClass("inactive-step") || ($(r).addClass("active"), setTimeout(function() {
                            return $(r).removeClass("active")
                        }, this.classToggleSpeed)), this.nextTourStep()
                }
            }, TreehouseTour.prototype.fadeInStep = function(firstStep) {
                var currentStep;
                return currentStep = $(this.$tourTips[this.currentStep]), currentStep.data("on-enter") && eval(currentStep.data("on-enter")), this.positionElement(currentStep, firstStep), currentStep.delay(this.smoothScrollSpeed - 100).fadeIn(this.fadeSpeed), $(this.parentCollection[this.currentStep]).addClass("active-tour-step")
            }, TreehouseTour.prototype.positionElement = function(t, e) {
                var i, s, r, o, n, a, l, h, u, c, d, p, f, g, m, y, v;
                return i = $(t.data("tour-step-selector")), 0 === i.length ? null : (i.is(":visible") || i.show(), n = i.offset().top, o = i.offset().left, e && (n += $(".tour-control-bar").height()), l = i.outerWidth(), r = i.outerHeight(), c = 6, s = o + l / 2, a = n + r / 2, p = parseInt(t.data("tour-step-width"), 10), d = parseInt(t.height(), 10), t.css("width", null != (v = p + "px") ? v : ""), y = t.outerWidth(), g = t.outerHeight(), f = y / 2, m = g / 2, i.addClass("tour-parent"), this.parentCollection.push(i), void 0 !== $(t).data("tour-step-include-siblings") && (u = i.siblings(":visible"), u.addClass("active-tour-siblings")), h = {
                    top: {
                        left: s - f,
                        top: n - g - c
                    },
                    right: {
                        left: o + l + c,
                        top: a - m
                    },
                    bottom: {
                        left: s - f,
                        top: n + r + c
                    },
                    left: {
                        left: o - y - c,
                        top: a - m
                    }
                }, this.handlePosition(t, h))
            }, TreehouseTour.prototype.fadeOutStep = function() {
                var t;
                return t = $(".tour-parent"), t.removeClass("active-tour-step"), t.siblings().removeClass("active-tour-siblings"), this.$tourTips.fadeOut(this.fadeSpeed)
            }, TreehouseTour.prototype.stepIndicator = function() {
                return $("." + this.tourStepIndicatorClass + " span").text("" + (this.currentStep + 1) + " of " + (this.totalTourSteps + 1))
            }, TreehouseTour.prototype.scrollStep = function() {
                var t, e, i, s, r;
                switch (this.$tourTips = $(this.$tourTips), s = this.$tourTips.eq(this.currentStep).data("offset"), e = this.$tourTips.eq(this.currentStep).outerHeight(), i = this.$tourTips.eq(this.currentStep).data("tour-position"), t = $(this.$tourTips.eq(this.currentStep)).outerHeight(), r = $(this.$tourTips.eq(this.currentStep).data("tour-step-selector")).height() > this.windowHeight ? s / 2 - e : s - e - this.windowHeight / 3, i) {
                    case "top":
                        return $("html, body").animate({
                            scrollTop: r
                        }, this.smoothScrollSpeed);
                    case "right":
                        return $("html, body").animate({
                            scrollTop: s - this.windowHeight / 2
                        }, this.smoothScrollSpeed);
                    case "bottom":
                        return $("html, body").animate({
                            scrollTop: s + (e - this.windowHeight / 2)
                        }, this.smoothScrollSpeed);
                    case "left":
                        return $("html, body").animate({
                            scrollTop: s - this.windowHeight / 2
                        }, this.smoothScrollSpeed)
                }
            }, TreehouseTour.prototype.moveTour = function(t, e) {
                switch (null == e && (e = !1), this.fadeOutStep(), t) {
                    case 1:
                        this.currentStep = this.currentStep + 1;
                        break;
                    case 0:
                        this.currentStep = 0;
                        break;
                    case -1:
                        this.currentStep = this.currentStep - 1;
                        break;
                    case null:
                        this.currentStep = !1
                }
                return this.scrollStep(), this.fadeInStep(e), this.stepIndicator(), 0 === this.currentStep ? $("." + this.tourBarPrevClass).addClass("inactive-step") : this.currentStep === this.totalTourSteps ? $("." + this.tourBarNextClass).addClass("inactive-step") : ($("." + this.tourBarNextClass).removeClass("inactive-step"), $("." + this.tourBarPrevClass).removeClass("inactive-step"))
            }, TreehouseTour.prototype.startTour = function(t) {
                return t.preventDefault(), this.moveTour(0, !0), this.$modalTarp.fadeIn(this.fadeSpeed).addClass("tarp-opened"), this.$headerElements.addClass("tour-active"), $("." + this.tourControlBarClass).removeClass("closed"), "undefined" != typeof Sidebar && null !== Sidebar && (Sidebar.nofix = !0), $(window).trigger("resize")
            }, TreehouseTour.prototype.nextTourStep = function() {
                return this.currentStep < this.totalTourSteps ? this.moveTour(1) : void 0
            }, TreehouseTour.prototype.prevTourStep = function() {
                return this.currentStep > 0 ? this.moveTour(-1) : void 0
            }, TreehouseTour.prototype.killTour = function() {
                return this.$headerElements.hasClass("tour-active") ? (this.fadeOutStep(), $("." + this.tourControlBarClass).addClass("closed"), this.$headerElements.removeClass("tour-active"), this.$modalTarp.delay(50).fadeOut(this.fadeSpeed).removeClass("tarp-opened"), $("html, body").animate({
                    scrollTop: 0
                }, 5), "undefined" != typeof Sidebar && null !== Sidebar && (Sidebar.nofix = !1), $(window).trigger("resize")) : void 0
            }, TreehouseTour
        }(), $(function() {
            return new TreehouseTour($("[data-tour]"))
        })
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        window.Filters = function() {
            function e(e) {
                if (this.options = e, this.deserializeState = t(this.deserializeState, this), this.serializeState = t(this.serializeState, this), this.reset = t(this.reset, this), this.update = t(this.update, this), "object" != typeof this.options) throw "options are not an object literal";
                if (null == this.options.container) throw "didn't pass 'container' option";
                if ("object" != typeof this.options.binds) throw "didn't pass 'binds' option";
                if ("string" != typeof this.options.basePath) throw "didn't pass 'basePath' option";
                this.binds = e.binds, this.container = $(e.container), _.each(this.binds, function(t) {
                    return function(e) {
                        var i;
                        return e instanceof jQuery && e.is("[type='text']") ? (i = null, e.on("keyup", function() {
                            return clearTimeout(i), i = setTimeout(t.update, 750)
                        }), e.on("keydown", function() {
                            return clearTimeout(i)
                        }), e.on("keydown", function(t) {
                            return 13 === t.which ? t.preventDefault() : void 0
                        })) : e instanceof jQuery && e.is("[type='hidden']") ? e.on("filter:change", t.update) : e.el.on("change", t.update)
                    }
                }(this)), this.container.on("pjax:error pjax:timeout", function() {
                    return !1
                }), this.container.on("pjax:end", function() {
                    return Treehouse.init()
                }), $(document).on("click", ".filter-reset", this.reset), $(document).on("click", "[data-filter-list-val]", function(t) {
                    return function(e) {
                        var i, s, r;
                        return e.preventDefault(), s = $(e.currentTarget), s.toggleClass("selected"), i = s.data("filter-list-val").split(":"), r = t.binds[i[0]], r.val(i[1]), r instanceof jQuery ? r.trigger("filter:change") : void 0
                    }
                }(this)), $(document).on("click", ".trigger-filters", function(t) {
                    return function(e) {
                        return $(".filters-container").toggle(), $(t).toggleClass("selected"), $("i", e.currentTarget).toggle()
                    }
                }(this)), this.deserializeState()
            }
            return e.prototype.update = function(t) {
                var e;
                return t && t.preventDefault(), this.serializeState(), e = new Object, _.each(this.binds, function(t, i) {
                    return e[i] = t.val()
                }), $.pjax({
                    push: !1,
                    url: "/" + this.options.basePath,
                    container: this.container,
                    data: e
                }), !1
            }, e.prototype.reset = function() {
                return _.each(this.binds, function(t) {
                    return t.val("")
                })
            }, e.prototype.serializeState = function() {
                var t;
                return t = _.reduce(this.binds, function() {
                    return function(t, e, i) {
                        return e = e.val(), void 0 === e && (e = ""), e = String(e).replace(" ", "-"), e && t.push("" + i + ":" + e), t
                    }
                }(this), []), t = t.join("/"), history.replaceState(null, null, "/" + this.options.basePath + "/" + t), $(document).trigger("filters:serialized")
            }, e.prototype.deserializeState = function() {
                var t;
                return t = location.pathname.split("?")[0], t = t.replace(this.options.basePath, ""), t = t.split("/"), _.each(t, function(t) {
                    return function(e) {
                        var i, s, r;
                        if ("" !== e) return r = e.split(":"), i = r[0], s = r[1], t.binds[i].val(s, !1), $(document).trigger("filter:deserialized", [e])
                    }
                }(this)), $(document).trigger("filters:deserialized"), Treehouse.init()
            }, e
        }()
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("prerequisite-add-to-home", t = function(t) {
            function i(t) {
                this.addedToHome = e(this.addedToHome, this), this.loaded = e(this.loaded, this), this.loading = e(this.loading, this), this.addToHome = e(this.addToHome, this), i.__super__.constructor.call(this, t), this.on("click", this.addToHome)
            }
            return s(i, t), i.prototype.addToHome = function(t) {
                return this.el.is(":not(.added-to-home)") ? ($.ajax({
                    url: this.el.attr("href"),
                    type: "POST",
                    dataType: "text",
                    beforeSend: this.loading,
                    complete: this.loaded,
                    success: this.addedToHome
                }), t.preventDefault()) : void 0
            }, i.prototype.loading = function() {
                return this.el.addClass("loading")
            }, i.prototype.loaded = function() {
                return this.el.removeClass("loading")
            }, i.prototype.addedToHome = function() {
                return this.el.addClass("added-to-home").attr("href", this.el.attr("href").replace(/\/pin/, ""))
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("profile-info-box", Treehouse.ProfilePage = function(e) {
            function s() {
                this.scrolling = t(this.scrolling, this), this.setVariables = t(this.setVariables, this), s.__super__.constructor.apply(this, arguments), this.layout = Featurette.get("layout"), this.breadcrumb = this.layout.elements.breadcrumb, this.listenTo(window, "resize", _.throttle(this.setVariables, 750), {
                    triggerImmediately: !0
                }), this.listenTo(document, "scroll", _.throttle(this.scrolling, 750), {
                    triggerImmediately: !0
                })
            }
            return i(s, e), s.prototype.setVariables = function() {
                return this.nameOffsetBottom = this.get("h1#name").outerHeight() + this.get("h1#name").offset().top - this.breadcrumb.getHeight(), this.imageOffsetBottom = this.get("figure img").outerHeight() + this.get("figure img").offset().top - this.breadcrumb.getHeight()
            }, s.prototype.scrolling = function() {
                return !this.scrolledPastTrigger && this.layout.getScrollTop() > this.nameOffsetBottom && this.layout.getScrollTop() > this.imageOffsetBottom ? (this.layout.addContext(), this.scrolledPastTrigger = !0) : this.scrolledPastTrigger && (this.layout.getScrollTop() < this.nameOffsetBottom || this.layout.getScrollTop() < this.imageOffsetBottom) ? (this.layout.removeContext(), this.scrolledPastTrigger = !1) : void 0
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("dashboard-index", t = function(t) {
            function i() {
                this.toggleCardVisibility = e(this.toggleCardVisibility, this), this.loadFilters = e(this.loadFilters, this), i.__super__.constructor.apply(this, arguments), this.viewingAll = !1, this.listenTo(document, "bookmark:removed", function(t) {
                    return function(e) {
                        return t.filters.update(e)
                    }
                }(this)), this.on("click", ".view-all", this.toggleCardVisibility), _.delay(this.loadFilters, 100), this.on("pjax:end", this.clearElementsCache), this.document = $(document)
            }
            return s(i, t), i.prototype.loadFilters = function() {
                return this.filters || (this.filters = new Filters({
                    basePath: "home",
                    container: "#home-pjax",
                    binds: {
                        view: Featurette.get("view")
                    }
                }))
            }, i.prototype.toggleCardVisibility = function() {
                return this.viewingAll ? (this.get(".card-list").addClass("collapsed"), this.get(".view-all").text(this.get(".view-all").data("view-collapsed-text")), this.viewingAll = !1) : (this.get(".card-list").removeClass("collapsed"), this.get(".view-all").text(this.get(".view-all").data("view-all-text")), this.viewingAll = !0), this.document.trigger("personalization.load")
            }, i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        Featurette.register("welcome-wizard", t = function(t) {
            function i(t) {
                this.sendDataToGoogleTagManager = e(this.sendDataToGoogleTagManager, this), this.sendDataToMixpanel = e(this.sendDataToMixpanel, this), this.sendAnalyticsData = e(this.sendAnalyticsData, this), this.joinTrack = e(this.joinTrack, this), this.onSkillLevelSelected = e(this.onSkillLevelSelected, this), this.onHelpVideoEnd = e(this.onHelpVideoEnd, this), this.playHelpVideo = e(this.playHelpVideo, this), this.getOptOutCourses = e(this.getOptOutCourses, this), this.redirectAfterSubmit = e(this.redirectAfterSubmit, this), this.onSurveySubmit = e(this.onSurveySubmit, this), this.onSubmitSurveyData = e(this.onSubmitSurveyData, this), this.onTopicFilterClicked = e(this.onTopicFilterClicked, this), this.onHashChange = e(this.onHashChange, this), this.onSyllabusClicked = e(this.onSyllabusClicked, this), this.onHelpClicked = e(this.onHelpClicked, this), this.resetSkill = e(this.resetSkill, this), this.onBackClicked = e(this.onBackClicked, this), this.answerQuestion = e(this.answerQuestion, this), this.nextStep = e(this.nextStep, this), this.listenToEvents = e(this.listenToEvents, this), i.__super__.constructor.call(this, t), this.autoJoin = this.el.data("auto-join"), this.helpVideo = this.get("[data-help-video]"), this.helpVideoContainer = this.helpVideo.parents("[data-help-video-container]"), this.surveyData = {}, this.notSure = !1, this.listenToEvents(), this.sendAnalyticsData()
            }
            return s(i, t), i.prototype.listenToEvents = function() {
                return this.on("click", "li.topic-filter a", this.onTopicFilterClicked), this.on("click", "[data-submit-survey]", this.onSubmitSurveyData), this.on("click", "[data-replay-help-video]", this.playHelpVideo), this.on("click", "[data-back-button]", this.onBackClicked), this.on("click", "[href=#step-help]", this.onHelpClicked), this.on("click", "[data-skill-level]", this.onSkillLevelSelected), this.on("click", "[data-syllabus]", this.onSyllabusClicked), this.helpVideo ? this.helpVideo.get(0).addEventListener("ended", this.onHelpVideoEnd) : void 0
            }, i.prototype.nextStep = function(t) {
                return this.answerQuestion(t), i.__super__.nextStep.apply(this, arguments)
            }, i.prototype.answerQuestion = function(t) {
                var e;
                return e = $(t.currentTarget), $.ajax("/onboarding_surveys/answer_question", {
                    data: {
                        question_id: e.closest(".step").data("question-id"),
                        answer_id: e.data("answer-id")
                    },
                    type: "PUT"
                })
            }, i.prototype.onBackClicked = function(t) {
                return t.preventDefault(), window.history.go(-1), this.resetSkill()
            }, i.prototype.resetSkill = function() {
                return this.get(".skill").show().siblings("[data-track-details]").hide()
            }, i.prototype.onHelpClicked = function() {
                return this.notSure = !0
            }, i.prototype.onSyllabusClicked = function(t) {
                return t.preventDefault(), $(t.currentTarget).toggleClass("checked")
            }, i.prototype.onHashChange = function(t) {
                var e, s, r, o, n;
                for (t.preventDefault(), o = this.get("[data-featurette='video-player']"), s = 0, r = o.length; r > s; s++) e = o[s], null != (n = Featurette.get(e.id)) && n.reset();
                return $("html,body").animate({
                    scrollTop: 0
                }), i.__super__.onHashChange.apply(this, arguments)
            }, i.prototype.onTopicFilterClicked = function(t) {
                return t.stopPropagation(), t.preventDefault(), this.surveyData.topic_id = $(t.currentTarget).parent().data("topic-id"), this.surveyData.action_to_take = "library", this.onSubmitSurveyData(t)
            }, i.prototype.onSubmitSurveyData = function(t) {
                var e;
                return t.preventDefault(), this.surveyData.track_to_join = $(t.currentTarget).data("track-id"), (e = this.surveyData).action_to_take || (e.action_to_take = $(t.currentTarget).data("action-to-take")), this.surveyData.skill_level = this.skillLevel, this.surveyData.not_sure = this.notSure, this.surveyData.opt_out_courses = this.getOptOutCourses(this.surveyData.track_to_join), "" !== this.get("#other_details").val() && (this.surveyData.other_details = this.get("#other_details").val()), $.post("/onboarding_surveys/complete", {
                    onboarding_survey: this.surveyData
                }).done(this.onSurveySubmit)
            }, i.prototype.onSurveySubmit = function(t, e, i) {
                return "undefined" != typeof mixpanel && null !== mixpanel ? mixpanel.track("Onboarding Survey Completed", {
                    $track_id: this.surveyData.track_to_join,
                    $action_taken: this.surveyData.action_to_take
                }, function(t) {
                    return function() {
                        return t.redirectAfterSubmit(i)
                    }
                }(this)) : this.redirectAfterSubmit(i)
            }, i.prototype.redirectAfterSubmit = function(t) {
                return window.location = t.getResponseHeader("Location")
            }, i.prototype.getOptOutCourses = function(t) {
                var e;
                return e = this.get("#track-" + t + "-courses a:not('.checked')").map(function() {
                    return $(this).data("syllabus-id")
                }), e.get()
            }, i.prototype.playHelpVideo = function(t) {
                return t.preventDefault(), this.helpVideoContainer.removeClass("video-ended"), this.helpVideo.trigger("play")
            }, i.prototype.onHelpVideoEnd = function() {
                return this.helpVideoContainer.addClass("video-ended").removeClass("box-content").addClass("box-header"), this.get("[data-help-video-box-header]").addClass("video-ended")
            }, i.prototype.onSkillLevelSelected = function(t) {
                var e, i, s;
                return t.preventDefault(), i = $(t.currentTarget), this.skillLevel = i.data("skill-level"), e = i.closest(".skill"), e.hide(), s = e.siblings("[data-track-details]"), s.fadeIn(), "Beginner" !== this.skillLevel && s.find("[data-track-details]").show(), this.autoJoin ? this.joinTrack(s.data("track-join-url")) : void 0
            }, i.prototype.joinTrack = function(t) {
                return $.ajax(t, {
                    type: "PUT"
                })
            }, i.prototype.sendAnalyticsData = function() {
                return null == $.cookie("registered_signup_event") ? (this.user = this.el.data("user"), this.subscription = this.el.data("subscription"), "undefined" != typeof mixpanel && null !== mixpanel && this.sendDataToMixpanel(), "undefined" != typeof dataLayer && null !== dataLayer && this.sendDataToGoogleTagManager(), $.cookie("registered_signup_event", !0)) : void 0
            }, i.prototype.sendDataToMixpanel = function() {
                return mixpanel.alias(this.user.id), mixpanel.people.set({
                    $created: this.user.created_at,
                    $first_name: this.user.first_name,
                    $last_name: this.user.last_name,
                    $email: this.user.email
                }), mixpanel.track("Signup Completed", {
                    plan: this.subscription.plan_id,
                    campaign: this.subscription.campaign_id,
                    billing_period: this.subscription.billing_period,
                    payment_method: this.subscription.payment_method
                })
            }, i.prototype.sendDataToGoogleTagManager = function() {
                var t;
                return t = parseInt(this.el.data("invoice-sub-total")) || null, dataLayer.push({
                    account: "created",
                    transactionId: this.subscription.id,
                    transactionTotal: t,
                    transactionProducts: {
                        sku: this.subscription.plan_id,
                        name: this.el.data("subscription-plan-title"),
                        price: t,
                        quantity: 1
                    }
                })
            }, i
        }(Wizard))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("questions-tab", Treehouse.QuestionsTab = function(e) {
            function s() {
                this.loadQuestions = t(this.loadQuestions, this), s.__super__.constructor.apply(this, arguments), this.tab = $("#tab-questions"), this.discussions = this.get(".discussions-list"), this.step_id = this.discussions.data("step-id") || 0, this.step_id && this.discussions.size() && this.loadQuestions()
            }
            return i(s, e), s.prototype.loadQuestions = function() {
                return $.ajax({
                    url: "/forum/video_suggested_posts",
                    data: {
                        video: this.step_id,
                        limit: 15,
                        sort: "high-quality"
                    },
                    dataType: "json",
                    success: function(t) {
                        return function(e) {
                            return t.discussions.html(e.html), "" === e.html ? (t.el.addClass("no-questions"), t.el.find("[data-related-questions]").attr("class", "grid-100")) : t.tab.find("a").append('<span class="discussions-counter">' + t.discussions.find(".discussion-meta").size() + "</span>")
                        }
                    }(this)
                })
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, i) {
                function s() {
                    this.constructor = e
                }
                for (var r in i) t.call(i, r) && (e[r] = i[r]);
                return s.prototype = i.prototype, e.prototype = new s, e.__super__ = i.prototype, e
            };
        Featurette.register("teachers-notes-tab", Treehouse.TeachersNotesTab = function(t) {
            function i() {
                i.__super__.constructor.apply(this, arguments), this.el.find("[data-teachers-notes] a").attr("target", "_blank")
            }
            return e(i, t), i
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Featurette.register("radial-progress-example", Treehouse.RadialProgressExample = function(e) {
            function s() {
                this.updateProgress = t(this.updateProgress, this), s.__super__.constructor.apply(this, arguments), this.on("click", "ul li", this.updateProgress)
            }
            return i(s, e), s.prototype.updateProgress = function(t) {
                var e;
                return t.preventDefault(), e = $(t.currentTarget), e.addClass("current").siblings().removeClass("current"), Featurette.get(this.el.find("svg").attr("id")).setProgress(parseInt(e.find("a").get(0).text))
            }, s
        }(Treehouse.View))
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.AccountDetailsValidator = function(e) {
            function s() {
                this.clearErrors = t(this.clearErrors, this), this.addError = t(this.addError, this), this.validateEmailAddress = t(this.validateEmailAddress, this), this.validateAccountEmail = t(this.validateAccountEmail, this), this.validateGuardianEmail = t(this.validateGuardianEmail, this), this.validatePasswordLength = t(this.validatePasswordLength, this), this.validatePostalCode = t(this.validatePostalCode, this), this.validatePresence = t(this.validatePresence, this), this.validate = t(this.validate, this), s.__super__.constructor.apply(this, arguments), this.fieldPrefix = "account_signup", this.fields = ["first_name", "last_name", "age_check", "email", "password"], this.clearErrors()
            }
            return i(s, e), s.prototype.validate = function() {
                return this.clearErrors(), this.validatePresence(), this.validatePasswordLength(), this.validatePostalCode(), this.validateAccountEmail(), this.validateGuardianEmail(), this.hasErrors
            }, s.prototype.validatePresence = function() {
                var t, e, i, s;
                i = !0, s = this.fields;
                for (e in s) t = s[e], "" === $("#" + this.fieldPrefix + "_" + t).val() && (this.addError(t, "This is required."), i = !1);
                return i
            }, s.prototype.validatePostalCode = function() {
                var t;
                return t = !0, "gte13" !== this.get("#" + this.fieldPrefix + "_age_check").val() || "credit_card" !== this.get("input[name='account_signup[payment_method]']").filter(":checked").val() ? t : (0 === this.get("#" + this.fieldPrefix + "_postal_code").val().length && (this.addError("postal_code", "This is invalid."), t = !1), t)
            }, s.prototype.validatePasswordLength = function() {
                return this.get("#" + this.fieldPrefix + "_password").val().length < 4 ? (this.addError("password", "Your password is too short so it won't protect your account very well. Please enter at least 4 characters."), !1) : !0
            }, s.prototype.validateGuardianEmail = function() {
                var t;
                return t = !0, "lt13" !== this.get("#" + this.fieldPrefix + "_age_check").val() ? t : this.validateEmailAddress("account_manager_email")
            }, s.prototype.validateAccountEmail = function() {
                return this.validateEmailAddress("email")
            }, s.prototype.validateEmailAddress = function(t) {
                var e;
                return e = RegExp(/^((?!\.)[a-z0-9._%+-]+(?!\.)\w)@[a-z0-9-\.]+\.[a-z.]{1,23}(?!\.)\w$/i), e.test(this.get("#" + this.fieldPrefix + "_" + t).val()) ? !0 : (this.addError(t, "This is invalid."), !1)
            }, s.prototype.addError = function(t, e) {
                return this.errors["" + this.fieldPrefix + "_" + t] = e, this.hasErrors = !0
            }, s.prototype.clearErrors = function() {
                return this.hasErrors = !1, this.errors = {}
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function s() {
                    this.constructor = t
                }
                for (var r in i) e.call(i, r) && (t[r] = i[r]);
                return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
            };
        Treehouse.CreditCardValidator = function(e) {
            function s() {
                this.clearErrors = t(this.clearErrors, this), this.addError = t(this.addError, this), this.validateLuhn = t(this.validateLuhn, this), this.validateCardNumber = t(this.validateCardNumber, this), this.validatePresence = t(this.validatePresence, this), this.validate = t(this.validate, this), s.__super__.constructor.apply(this, arguments), this.fieldPrefix = "credit_card", this.fields = ["number", "cvv", "month", "year"], this.errors = {}
            }
            return i(s, e), s.prototype.validate = function() {
                return this.clearErrors(), this.validatePresence() && this.validateCardNumber()
            }, s.prototype.validatePresence = function() {
                var t, e, i, s;
                i = !0, s = this.fields;
                for (e in s) t = s[e], "" === this.get("#" + this.fieldPrefix + "_" + t).val() && (this.addError(t, "This is required."), i = !1);
                return i
            }, s.prototype.validateCardNumber = function() {
                var t;
                return t = new RegExp("^[0-9]{14,20}$"), t.test(this.get("#" + this.fieldPrefix + "_number").val()) && this.validateLuhn() ? !0 : (this.addError("number", "There was a problem verifying your credit card details."), !1)
            }, s.prototype.validateLuhn = function() {
                var t, e;
                return t = !0, e = _(this.get("#" + this.fieldPrefix + "_number").val().split("")).reduceRight(function(e, i) {
                    return i = parseInt(i), (t = !t) && (i *= 2), i > 9 && (i -= 9), e + i
                }, 0), e % 10 === 0
            }, s.prototype.addError = function(t, e) {
                return this.errors["" + this.fieldPrefix + "_" + t] = e
            }, s.prototype.clearErrors = function() {
                return this.errors = {}
            }, s
        }(Treehouse.View)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        Treehouse.CreditCardTokenizer = function() {
            function e(e, i, s, r) {
                this.updateNonce = t(this.updateNonce, this), this.tokenizeCard = t(this.tokenizeCard, this), this.form = $("#" + e), this.paymentMethodNonce = this.form.find("[data-braintree-name=payment_method_nonce]"), this.successCallback = s, this.failureCallback = r, this.client = new braintree.api.Client({
                    clientToken: i.client_token
                }), BraintreeData.setup(i.merchant_id, e, i.environment)
            }
            return e.prototype.tokenizeCard = function(t, e, i, s) {
                return this.client.tokenizeCard({
                    number: t,
                    expirationDate: "" + e + "/" + i,
                    cvv: s
                }, this.updateNonce)
            }, e.prototype.updateNonce = function(t, e) {
                return t ? this.failureCallback() : (this.paymentMethodNonce.val(e), this.successCallback())
            }, e
        }()
    }.call(this),
    function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            i = {}.hasOwnProperty,
            s = function(t, e) {
                function s() {
                    this.constructor = t
                }
                for (var r in e) i.call(e, r) && (t[r] = e[r]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            };
        t = function(t) {
            function i() {
                this.dragStop = e(this.dragStop, this), this.dragStart = e(this.dragStart, this), this.toggleDropDown = e(this.toggleDropDown, this), this.removeItem = e(this.removeItem, this), this.addItem = e(this.addItem, this), this.hideAdditionPanel = e(this.hideAdditionPanel, this), this.showAdditionPanel = e(this.showAdditionPanel, this), i.__super__.constructor.apply(this, arguments), this.on("click", ".queue-addition", this.showAdditionPanel), this.on("click", ".queue-panel .queue-handle", this.hideAdditionPanel), this.on("click", ".queue-addition-panel a", this.addItem), this.on("click", ".queue-node-options", this.toggleDropDown), this.on("click", ".remove-node", this.removeItem), this.el.sortable({
                    axis: "y",
                    handle: ".queue-handle-draggable",
                    items: ".queue-item",
                    start: this.dragStart,
                    stop: this.dragStop
                })
            }
            return s(i, t), i.prototype.showAdditionPanel = function(t) {
                var e;
                return t.preventDefault(), e = $(t.currentTarget), e.addClass("inactive"), e.siblings(".queue-panel").addClass("active")
            }, i.prototype.hideAdditionPanel = function(t) {
                var e;
                return t.preventDefault(), e = $(t.currentTarget).parent(), e.cssAnimate(500).removeClass("active"), e.siblings(".queue-addition").removeClass("inactive")
            }, i.prototype.addItem = function(t) {
                var e, i, s, r, o;
                return t.preventDefault(), o = $(t.currentTarget), e = {
                    activity_type: o.data("activity-type"),
                    activity_id: o.data("activity-id")
                }, i = o.closest(".queue-item"), s = i.attr("id").substring("queueitem_".length), e.insert_after_item_id = parseInt(s), r = o.closest(".queue-panel"), $.ajax({
                    url: o.data("add-item-url"),
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(e),
                    complete: function(t) {
                        return r.removeClass("active"), r.siblings(".queue-addition").removeClass("inactive"), i.after(t.responseText)
                    }
                })
            }, i.prototype.removeItem = function(t) {
                var e, i, s, r, o;
                return t.preventDefault(), r = $(t.currentTarget), e = r.children(".dropdown-child"), e.hide(), e.siblings(".queue-node-options").removeClass("selected"), s = r.closest(".queue-node"), i = s.parent(), o = i.data("remove-item-url"), i.remove(), $.ajax({
                    url: o,
                    type: "DELETE"
                })
            }, i.prototype.toggleDropDown = function(t) {
                var e;
                return t.preventDefault(), e = $(t.currentTarget), e.toggleClass("selected"), e.children(".dropdown-child").toggle()
            }, i.prototype.dragStart = function(t, e) {
                return e.item.find(".queue-card").addClass("drag"), this.get(".queue-handle-draggable").addClass("hide"), e.item.find(".queue-handle-draggable").removeClass("hide")
            }, i.prototype.dragStop = function(t, e) {
                var i;
                return e.item.find(".queue-card").delay(800).removeClass("drag"), this.get(".queue-handle-draggable").removeClass("hide"), i = this.el.sortable("serialize"), $.ajax({
                    url: this.el.data("reorder-items-url"),
                    type: "PUT",
                    data: i
                })
            }, i
        }(Treehouse.View), Featurette.register("learning-queue", t)
    }.call(this), Treehouse.init();