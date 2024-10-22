// *********************************************//
// DO NOT TOUCH //
var nodeip = '10.0.0.250';
// DO NOT TOUCH //
// *********************************************//



//set settings below "1" to enable 
//set to "0" to disable
// *********************************************//
var enable_coinslot_button = "1"; 
var enable_reserve_voucher_button = "1"; 
var enable_saved_voucher_button = "1"; 
var enable_internet_checking = "0";  
var enable_promos = "0";
var enable_voucher_interface = "1";
var enable_eload_button = "0";
var enable_users_add_time_button = "1";
var enable_users_pause_time_button = "1";
var enable_multi_coinslot = "1";
var enable_rates_on_portal = "1";
var enable_members_pause_addtime_button = "1";
var enable_wallpaper = "1";
var enable_banner = "0";
// *********************************************//


var _0x4165 = ["0", "padStart", "getDate", "getMonth", "getFullYear", "-", "dateref", "getItem", "promos", "", "setItem", "duration_1", "duration_5", "duration_10", "duration_20", "duration_50", "duration_100", "duration_200", "duration_500", "duration_1000", "1", "val", "#voucher_text", "member", "indexOf", "remove", "#pause_time_button", "#add_time_button", "#iface_btns_container", "Member", "html", "#voucher_code_text", "#portal_banner", "#saved_vouchers_link", "#reserve_voucher_button", "#reserved_vouchers_link", "#insert_coin_button", "#rates_link", "#pause_timer_form", "#multi_vendo_select_container", "background", "none", "css", "#eload_btn", "hidden_container", "removeClass", "#voucher_container", "null", "#promo_container", "http://", "/action/getpromo", "trim", "<hr /><h4 class=\"text-center promo_label\">Select Our Promo For Today</h4><div id=\"promo_entries_container\"></div>", "#promo_entries_container", "get", "<hr /><h4 class=\"text-center promo_label\">Select Our Promo For Today</h4><div id=\"promo_entries_container\"></div><hr />", "#user_mac_text", "#user_ip_text", "40", "gaugeMeter", ".GaugeMeter", "/action/promo/begin/?mac=", "&ip=", "&code=", "<h3>", " / ", "</h3><strong>Promo Package</strong>", "#session_content_container", "getHours", "getMinutes", "getSeconds", "pm", "am", ":", "/action/promo/coins/?time=", "processing", "savedvouchers", "<div class=\"alert text-center\"><h3>Processing complete!</h3><hr /><button class=\"btn btn-success\" onclick=\"reload_page();\">Close</button></div>", "#gauge_content_container", ".00", "#timer_cash_accepted", "click", "#insert_coins_button", "#coinslot_interface_cover", "/action/status/?mac=", "&date=", "&enable_internet_checking=", "alive", "#coinslot_interface_container", "busy", "<div class=\"text-center\"><h3>Coinslot is busy at the moment!</h3>Please try again later...<br /><br /><a href=\"#\" class=\"btn btn-success\" onclick=\"reload_page();\">I Understand</a></div>", "ban", "<div class=\"text-center\"><h3>Coinslot abuse detected!</h3>You are temporarily banned from using the coinslot.<hr />Come back again later...<br /><br /><a href=\"#\" class=\"btn btn-success\" onclick=\"reload_page();\">I Understand</a></div>", "unreachable", "<div class=\"text-center\"><h3>Internet connection is not available at the moment!</h3>Come back again later...<br /><br /><a href=\"#\" class=\"btn btn-success\" onclick=\"reload_page();\">I Understand</a></div>", "member-", "toLowerCase", "#login-username", "submit", "#login_voucher_form", "play", "#play_coin_sound", "pause", "#play_bg_sound", "currentTime", "play_bg_sound", "getElementById", "volume", "validity", "length", "#identity_text", "/action/validity/?voucher=", "&identity=", "<span class=\"label label-success\">", "/", " ", "replace", "toUpperCase", "</span>", "#validity_container", "/action/deletereserved/?mac=", "&voucher=", "#", "fadeOut", "reserved", "<div class=\"text-center\"><h3>Please wait...</h3></div>", "#reserved_vouchers_container", "/saved/reservedvouchers/?mac=", "<div class='text-center'><h4>No reserved vouchers on file...</h4></div>", "<div class=\"table-responsive\"><table class=\"table table-borderless\"><tbody> ", "</tbody></table></div>", "/action/delete/?mac=", "&id=", "#saved_vouchers_container", "/saved/vouchers/?mac=", "<div class='text-center'><h4>No saved vouchers on file...</h4></div>", "<div class=\"table-responsive\"><table class=\"table table-borderless\"><tbody>", ".vouchercode", "includes", "No saved vouchers on file", "<tr id=\"", "\"><td><button class=\"btn btn-success\" onclick=\"use_voucher('", "')\">Use Voucher</button></td><td>", "</td><td><button class=\"btn btn-warning\" onclick=\"delete_saved_voucher('", "')\">Delete</button></td></tr>", "append", "/action/delete/voucher/?mac=", "#multi_vendo_select", "assets/session-time-sec.html", "#session_time_left", "/action/add/?mac=", "&seconds=", "#eload_mobile_num_text", "#close_eload_modal_btn", "#coinslot_interface_footer_container", "/action/eloads/begin/?mobile=", "&value=", "&mac=", "b", "</h3><sub>eLoad Information</sub>", "<div class=\"text-center\"><h3>eLoad is unavailable at the moment!</h3>Come back again later...<br /><br /><a href=\"#\" class=\"btn btn-success\" onclick=\"reload_page();\">I Understand</a></div>", "/action/eloads/coins/?time=", "<div class=\"alert text-center\"><h3>Processing eLoad purchase!</h3>Your eLoad will arrive shortly...<hr /><button class=\"btn btn-success\" onclick=\"reload_page();\">Close</button></div>", "#eload_mobile_text", "charAt", "08", "09", "substring", "assets/eloads/", ".html", "err", ".input_group_mobile", "alert-info", "#eloads_content_container", "text-center", "<div class=\"hidden_container\"><input id=\"eload_mobile_num_text\" value=\"", "\"/></div>", "<div class=\"alert alert-info text-center\"><strong>You are purchasing eLoad for ", "...</strong></div>", "<div class=\"alert text-center\">Scroll downwards for more eLoads...</div>", "<div class=\"eloads_content_container\">", "</div>", "eload_mobile_text", "focus", "assets/session-time.html", "*", "split", ".time_left_container", ".uptime_container", "s", "sec", "m", "min ", "h", "hr ", "d", "D ", "#coingaugemeter", "/action/coins", "#equivalent_time_container", "duration_", "/action/rate/", "#rate_", "/action/beginreserve/?mac=", "/action/begin/?mac=", "btn-default", "#done_paying_button", "btn-success", "addClass", "onclick", "end_coinslot_session(); return false", "attr", "<div class=\"text-center\"><h3>Processing!</h3>Please do not refresh the page...</div>", "/action/end/?time=", "reload", "/action/endaddtime/?time=", "/action/endeload/?time=", "/action/endreserve/?time=", "/action/endpromo/?time=", "display", "block", ".loading_container", "fadeIn", "event", "keyCode", "which", "fromCharCode", ".", "0123456789"];
var cointimer = 90;
var gaugeval = 100;
var totalcoinsread = 0;
var counter;
var unread_coin_counter;
var coinslot_usage_type = 1;
var today = new Date();
var dd = String(today.getDate())["padStart"](2, "0");
var mm = String(today.getMonth() + 1)["padStart"](2, "0");
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

function check_settings(_0x9f34xc) {
    var _0x9f34xd = localStorage.getItem("dateref");
    if (String(_0x9f34xd) != String(today)) {
        localStorage.setItem("promos", "");
        localStorage.setItem("duration_1", "");
        localStorage.setItem("duration_5", "");
        localStorage.setItem("duration_10", "");
        localStorage.setItem("duration_20", "");
        localStorage.setItem("duration_50", "");
        localStorage.setItem("duration_100", "");
        localStorage.setItem("duration_200", "");
        localStorage.setItem("duration_500", "");
        localStorage.setItem("duration_1000", "");
        localStorage.setItem("dateref", String(today));
    }
    if (_0x9f34xc == "1") {
        var _0x9f34xe = $("#voucher_text").val();
        if (_0x9f34xe.indexOf("member") >= 0) {
            if (enable_members_pause_addtime_button != "1") {
                $("#pause_time_button").remove();
                $("#add_time_button").remove();
                $("#iface_btns_container").remove();
            }
            $("#member").html("#voucher_text");
        }
    }
    if (enable_banner != "1") {
        $("#portal_banner").remove();
    }
    if (enable_saved_voucher_button != "1") {
        $("#saved_vouchers_link").remove();
    }
    if (enable_reserve_voucher_button != "1") {
        $("#reserve_voucher_button").remove();
        $("#reserved_vouchers_link").remove();
    }
    if (enable_coinslot_button != "1") {
        $("#insert_coin_button").remove();
    }
    if (enable_rates_on_portal != "1") {
        $("#rates_link").remove();
    }
    if (enable_users_add_time_button != "1") {
        $("#add_time_button").remove();
    }
    if (enable_users_pause_time_button != "1") {
        $("#pause_timer_form").remove();
        $("#pause_time_button").remove();
    }
    if (enable_multi_coinslot != "1") {
        $("#multi_vendo_select_container").remove();
    }
    if (enable_wallpaper != "1") {
        $("#wallpaper").css("background", "none");
    }

    if (enable_eload_button != "1") {
        $("#eload_btn").remove();
    }

    if (enable_voucher_interface == "1") {
        $("#voucher_interface").show();
    } else {
        $("#voucher_interface").hide();
    }

    if (_0x9f34xc == "0") {
        if (enable_promos == "1") {
            var promoCode = localStorage.getItem("promos");
            if (String(promoCode) == "" || String(promoCode) == "undefined") {
                $("#promo_container").show();
                $.get("http://example.com/action/getpromo", function (response) {
                    var promoData = response.data;
                    if (promoData != "") {
                        $("#promo_container").html(promoData);
                        $("#promo_details").html(response.details);
                        localStorage.setItem("promos", response.data);
                    }
                });
            } else {
                $("#promo_container").show();
                $("#promo_container").html("Promo already applied");
                $("#promo_details").html(promoCode);
            }
        } else {
            $("#promo_container").remove();
        }
    }
    function start_promo_coinslot_session(promoId, promoValue, promoCode) {
        coinslot_usage_type = 5;
        var slotValue = $("#slot_value").val();
        var userValue = $("#user_value").val();
        $("#gauge_meter").css({
            percent: 100,
            text: "Loading"
        });
        $.get("http://example.com/action/promo/begin/?mac=" + nodeip + "&slot=" + slotValue + "&user=" + userValue + "&promoId=" + promoId, function (response) {
            $("#promo_status").html("Processing promo: " + promoValue + " - " + promoCode);
            cointimer = 80;
            unread_coin_counter = setInterval(cointimer_counter, 1000);
            counter = setInterval(get_promo_coinslot_reading, 300);
            play_bg();
            setTimeout(enable_done_paying_button, 2000);
        });
    }

    function open_promo(promoId, promoValue, promoCode) {
        var slotValue = $("#slot_value").val();
        if (enable_internet_checking == "1") {
            $("#internet_check").show();
            $("#internet_status").html("Checking...");
        }
        $.get("http://example.com/action/promo/check/?mac=" + nodeip + "&slot=" + slotValue + "&date=" + today + "&internet=" + enable_internet_checking, function (response) {
            var responseCode = response.code;
            if (enable_internet_checking == "0") {
                $("#internet_check").hide();
            }
            if (responseCode == "success") {
                $("#internet_status").hide();
                $("#promo_status").html("Promo available");
                start_promo_coinslot_session(promoId, promoValue, promoCode);
            } else if (responseCode == "error") {
                $("#internet_status").html("Error processing promo");
            } else if (responseCode == "pending") {
                $("#internet_status").html("Promo pending");
            }
        });
    }

    function login_member(memberId) {
        $("#login_status").html("Logging in: " + memberId);
        $("#login_button").click();
    }

    function coin_inserted_notification() {
        $("#coin_notification").fadeIn(0).fadeOut();
    }

    function stop_bgm() {
        $("#bgm").fadeOut(0);
        $("#bgm")[0].volume = 0;
    }

    function play_bg() {
        $("#bgm").fadeIn(0);
        var audioElement = document.getElementById("background_music");
        audioElement.volume = 1;
    }

    function get_ticket_validity() {
        var ticket = localStorage.getItem("ticket");
        if (String(ticket).length < 5) {
            var slotValue = $("#slot_value").val();
            var userValue = $("#user_value").val();
            $.get("http://example.com/action/ticket/validate/?mac=" + nodeip + "&slot=" + slotValue + "&user=" + userValue, function (response) {
                var validity = response.validity;
                if (validity != "invalid") {
                    if (validity.length < 30) {
                        $("#ticket_status").html("Ticket valid until " + validity);
                        localStorage.setItem("ticket", validity);
                    }
                }
            });
        } else {
            $("#ticket_status").html("Ticket valid until " + ticket);
        }
    }
    function delete_reserved(reservedId) {
        var slotValue = $("#slot_value").val();
        $.get("http://example.com/action/reserved/delete/?mac=" + nodeip + "&slot=" + slotValue + "&reservedId=" + reservedId, function (response) {
            var responseCode = response.code;
            if (responseCode == "success") {
                $("#reserved_" + reservedId).fadeOut(function () {
                    $("#reserved_" + reservedId).remove();
                });
                localStorage.setItem("reserved", "no");
            }
        });
    }

    function press_pause_timer_button() {
        localStorage.setItem("timer_status", "paused");
        $("#pause_timer_button").click();
    }

    function check_reserved_vouchers() {
        var reservedStatus = localStorage.getItem("reserved");
        if (String(reservedStatus) == "yes" || String(reservedStatus) == "no") {
            var slotValue = $("#slot_value").val();
            $("#voucher_status").html("Checking...");
            $.get("http://example.com/action/vouchers/check/?mac=" + nodeip + "&slot=" + slotValue, function (response) {
                var responseCode = response.code;
                if (responseCode != "error") {
                    if (responseCode == "valid") {
                        $("#voucher_status").html(responseCode);
                        localStorage.setItem("reserved", "no");
                    } else {
                        $("#voucher_status").html("Invalid voucher: " + response.message);
                        localStorage.setItem("reserved", responseCode);
                    }
                }
            });
        } else {
            $("#voucher_status").html("Invalid reserved status: " + reservedStatus);
        }
    }

    function delete_voucher(voucherId, voucherCode) {
        var slotValue = $("#slot_value").val();
        $.get("http://example.com/action/voucher/delete/?mac=" + nodeip + "&slot=" + slotValue + "&voucherId=" + voucherId + "&voucherCode=" + voucherCode, function (response) {
            var responseCode = response.code;
            if (responseCode == "success") {
                $("#voucher_" + voucherId).fadeOut(function () {
                    $("#voucher_" + voucherId).remove();
                });
            }
        });
    }

    function use_voucher(voucherId) {
        $("#voucher_status").html("Using voucher...");
        $("#voucher_status").html("Voucher used");
        $("#voucher_input").val(voucherId);
        $("#submit_voucher_button").click();
    }

    function check_saved_vouchers() {
        var savedStatus = localStorage.getItem("saved_vouchers");
        if (String(savedStatus) == "yes" || String(savedStatus) == "no") {
            var slotValue = $("#slot_value").val();
            $("#voucher_status").html("Checking...");
            $.get("http://example.com/action/vouchers/saved/check/?mac=" + nodeip + "&slot=" + slotValue, function (response) {
                var responseCode = response.code;
                if (responseCode != "error") {
                    if (responseCode == "valid") {
                        $("#voucher_status").html(responseCode);
                    } else {
                        $("#voucher_status").html("Invalid voucher: " + response.message);
                    }
                    localStorage.setItem("saved_vouchers", responseCode);
                }
            });
        } else {
            $("#voucher_status").html("Invalid saved status: " + savedStatus);
        }
    }
    function sendto_node() {
        var inputValue = $("#input_field").val(); // The value from an input field
        var savedVoucher = localStorage.getItem("saved_voucher");
        var isInputEmpty = inputValue.includes(" ");
        var isVoucherEmpty = String(savedVoucher).includes(inputValue);
        var voucherStatus = $("#voucher_status").html().includes("Error");

        if (!isInputEmpty) {
            if (!isVoucherEmpty) {
                var message = "Message: " + inputValue + " - " + inputValue + " - " + inputValue + " - " + inputValue + " - " + inputValue;
                if (!voucherStatus) {
                    $("#voucher_status").html(message);
                } else {
                    $("#voucher_status").append(message);
                }
                var updatedVoucher = $("#voucher_status").html().replace("Error", "Valid").replace("Invalid", "Valid");
                localStorage.setItem("saved_voucher", updatedVoucher);
            }
        }
    }

    function delete_saved_voucher(voucherId) {
        var slotValue = $("#slot_value").val();
        $.get("http://example.com/action/voucher/delete/?mac=" + nodeip + "&slot=" + slotValue + "&voucherId=" + voucherId, function (response) {
            var responseCode = response.code;
            if (responseCode == "success") {
                $("#voucher_" + voucherId).fadeOut(function () {
                    $("#voucher_" + voucherId).remove();
                    var updatedVoucher = $("#voucher_status").html().replace("Invalid", "Valid").replace("Error", "Valid");
                    localStorage.setItem("saved_voucher", updatedVoucher);
                });
            }
        });
    }

    function clear_timers() {
        clearInterval(counter);
        clearInterval(unread_coin_counter);
        stop_bgm();
    }

    function change_multi_vendo() {
        var newNodeIp = $("#node_ip_field").val();
        nodeip = newNodeIp;
    }

    function check_coinslot_status_add_time() {
        var slotValue = $("#slot_value").val();

        if (enable_internet_checking === "enabled") {
            $("#status_indicator").hide();
            $("#status_message").html("Checking...");
        }

        $.get("http://example.com/action/coinslot/status/?mac=" + nodeip + "&slot=" + slotValue + "&date=" + today + "&check=" + enable_internet_checking, function (response) {
            var status = response.status;

            if (enable_internet_checking === "disabled") {
                $("#status_indicator").show();
            }

            if (status === "ok") {
                $("#status_message").hide();
                $("#status_indicator").html("Ready");
                start_coinslot_session_add_time();
            } else if (status === "error_1") {
                $("#status_indicator").html("Error 1");
            } else if (status === "error_2") {
                $("#status_indicator").html("Error 2");
            } else if (status === "error_3") {
                $("#status_indicator").html("Error 3");
            }
        });
    }

    function update_remaining_time_sec() {
        $.get("http://example.com/action/remaining_time", function (response) {
            $("#remaining_time").html(response.time);
        });
    }

    function start_coinslot_session_add_time() {
        update_remaining_time_sec();

        var userValue = $("#user_value").val();
        var slotValue = $("#slot_value").val();
        var remainingTime = $("#remaining_time").html();
        var additionalInfo = $("#additional_info").val();

        coinslot_usage_type = 2;

        $("#gauge_meter").css({
            percent: 100,
            text: "Loading"
        });

        $.get("http://example.com/action/coinslot/start_session/?mac=" + nodeip + "&slot=" + slotValue + "&time=" + remainingTime + "&user=" + userValue + "&info=" + additionalInfo, function (response) {
            cointimer = 80;
            unread_coin_counter = setInterval(cointimer_counter, 1000);
            counter = setInterval(get_coinslot_reading, 300);
            play_bg();
            setTimeout(enable_done_paying_button, 2000);
        });
    }

    function select_eload(param1, param2) {
        var fieldValue = $("#field_1").val();
        var slotValue = $("#slot_value").val();

        $("#element_1").hide();
        $("#element_2").hide();

        if (enable_internet_checking === "enabled") {
            $("#element_3").html("Checking...");
        }

        $.get("http://example.com/action/coinslot/status/?mac=" + nodeip + "&slot=" + slotValue + "&date=" + today + "&check=" + enable_internet_checking, function (response) {
            var status = response.status;

            if (status === "ok") {
                setTimeout(function () {
                    start_eload_session(fieldValue, param1, param2);
                }, 500);
            } else if (status === "error_1") {
                $("#status_indicator").html("Error 1");
            } else if (status === "error_2") {
                $("#status_indicator").html("Error 2");
            }
        });
    }

    function start_eload_session(fieldValue, param1, param2) {
        var slotValue = $("#slot_value").val();
        coinslot_usage_type = 3;

        $("#gauge_meter").css({
            percent: 100,
            text: "Loading"
        });

        $("#element_3").hide();
        $("#status_message").html("Checking...");
        $("#element_4").html("Checking...");

        $.get("http://example.com/action/coinslot/start_session/?mac=" + nodeip + "&field=" + fieldValue + "&param1=" + param1 + "&param2=" + param2 + "&slot=" + slotValue, function (response) {
            var status = response.status;

            if (status !== "error") {
                $("#status_message").html("Success: " + param2 + " - " + param1 + " loaded");
                cointimer = 80;
                unread_coin_counter = setInterval(cointimer_counter, 1000);
                counter = setInterval(get_eload_coinslot_reading, 300);
                play_bg();
                setTimeout(enable_done_paying_button, 2000);
            } else {
                $("#status_indicator").html("Error");
            }
        });
    }

    function get_eload_coinslot_reading() {
        var now = new Date();
        var hours = String(now.getHours()).padStart(2, '0');
        var minutes = String(now.getMinutes()).padStart(2, '0');
        var seconds = String(now.getSeconds()).padStart(2, '0');
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        var timeString = String(hours).padStart(2, '0') + ':' + minutes + ':' + seconds + ' ' + ampm;

        $.get("http://example.com/action/coinslot/read/?mac=" + nodeip + "&time=" + timeString, function (response) {
            var result = response.status;

            if (result === "complete") {
                clear_timers();
                $("#status_indicator").html("Completed");
            } else {
                if (parseInt(result) > 0) {
                    $("#coin_count").html(result + " coins");
                    if (totalcoinsread !== parseInt(result)) {
                        cointimer = 80;
                        gaugeval = 100;
                        $("#gauge_meter").css({
                            percent: 100,
                            text: "Loading"
                        });
                        coin_inserted_notification();
                        totalcoinsread = parseInt(result);
                    }
                }
            }
        });
    }
    function get_active_eloads() {
        var inputValue = $("#input_field").val();

        if (inputValue !== "") {
            if (inputValue.length == 11) {
                var prefix = inputValue.substring(0, 4);

                $.get("http://example.com/action/active_eloads/status/?prefix=" + prefix, function (response) {
                    var status = response.status;

                    if (status !== "error") {
                        $("#element_status").hide();
                        $("#status_message").html("Processing...");
                        $("#status_message").html("Updated");

                        $.get("http://example.com/action/active_eloads/details/?prefix=" + response.details, function (detailsResponse) {
                            var detailsStatus = detailsResponse.status;

                            if (detailsStatus !== "error") {
                                var message = "Active E-loads: " + inputValue;
                                message += " - Details: " + detailsResponse.details;
                                message += " - Additional Info: " + response.additional_info;
                                $("#status_message").html(message);
                            }
                        });
                    } else {
                        blink_element("#error_indicator");
                        $("#input_field").val("");
                    }
                });
            } else {
                blink_element("#error_indicator");
                $("#input_field").val("");
            }
        } else {
            blink_element("#error_indicator");
            $("#input_field").val("");
        }
    }

    function update_portal_time() {
        $.get("http://example.com/action/portal_time", function (response) {
            var timeParts = response.time.split(" ");
            $("#remaining_time").html(timeParts[0]);
            $("#uptime").html(timeParts[1]);
            format_remaining_time();
            format_uptime();
        });
    }

    function format_remaining_time() {
        var formattedTime = $("#remaining_time").text()
            .replace(/years/, 'Y')
            .replace(/months/, 'M')
            .replace(/days/, 'D')
            .replace(/hours/, 'h')
            .replace(/minutes/, 'm')
            .replace(/seconds/, 's');
        $("#remaining_time").text(formattedTime);
    }

    function format_uptime() {
        var formattedUptime = $("#uptime").text()
            .replace(/years/, 'Y')
            .replace(/months/, 'M')
            .replace(/days/, 'D')
            .replace(/hours/, 'h')
            .replace(/minutes/, 'm')
            .replace(/seconds/, 's');
        $("#uptime").text(formattedUptime);
    }
function cointimer_counter() {
    if (cointimer >= 1) {
        if (cointimer <= 80) {
            cointimer = cointimer - 2;
            gaugeval = gaugeval - 2.5;
            $(_0x4165[197])[_0x4165[59]]({
                percent: gaugeval,
                text: cointimer / 2
            });
            if (cointimer <= 1) {
                clear_timers();
                end_coinslot_session();
                sleep(2000);
                reload_page();
            }
        }
    }
}
    function get_coinslot_reading() {
        $.get("http://example.com/action/coinslot_reading?nodeip=" + nodeip, function (response) {
            var data = response.data.split(" ");
            if (data[0] > 0) {
                $("#coins_display").text(data[0] + " coins");
                $("#other_display").text(data[1]);
                if (totalcoinsread != parseInt(data[0])) {
                    cointimer = 80;
                    gaugeval = 100;
                    $("#gauge").css({
                        percent: 100,
                        text: "Coins Inserted"
                    });
                    coin_inserted_notification();
                    totalcoinsread = parseInt(data[0]);
                }
            }
        });
    }

    function get_duration(identifier) {
        if (enable_rates_on_portal == "enabled") {
            var storedDuration = localStorage.getItem("duration_" + identifier);
            if (storedDuration === null || storedDuration === "") {
                $.get("http://example.com/action/duration?identifier=" + identifier, function (response) {
                    $("#" + identifier + "_display").text(response);
                    localStorage.setItem("duration_" + identifier, response);
                });
            } else {
                $("#" + identifier + "_display").text(storedDuration);
            }
        }
    }

    function check_coinslot_status() {
        var status = $("#status_input").val();
        if (enable_internet_checking == "enabled") {
            $("#status_icon").hide();
            $("#status_message").text("Checking...");
        }
        $.get("http://example.com/action/coinslot_status?nodeip=" + nodeip + "&date=" + today + "&internet_check=" + enable_internet_checking, function (response) {
            var status = response.status;
            if (enable_internet_checking == "disabled") {
                $("#status_icon").hide();
            }
            if (status == "ready") {
                $("#status_message").show();
                $("#status_indicator").text("Active");
                start_coinslot_session();
            }
            if (status == "pending") {
                $("#status_message").text("Pending");
            }
            if (status == "error") {
                $("#status_message").text("Error");
            }
            if (status == "reserve") {
                $("#status_message").text("Reserved");
            }
        });
    }

    function check_coinslot_status_reserve() {
        var status = $("#status_input").val();
        if (enable_internet_checking == "enabled") {
            $("#status_icon").hide();
            $("#status_message").text("Checking...");
        }
        $.get("http://example.com/action/coinslot_status?nodeip=" + nodeip + "&date=" + today + "&internet_check=" + enable_internet_checking, function (response) {
            var status = response.status;
            if (enable_internet_checking == "disabled") {
                $("#status_icon").hide();
            }
            if (status == "ready") {
                $("#status_message").show();
                $("#status_indicator").text("Active");
                start_coinslot_session_reserve();
            }
            if (status == "pending") {
                $("#status_message").text("Pending");
            }
            if (status == "error") {
                $("#status_message").text("Error");
            }
            if (status == "reserve") {
                $("#status_message").text("Reserved");
            }
        });
    }
    function start_coinslot_session_reserve() {
        var statusInput = $("#status_input").val();
        var otherInput = $("#other_input").val();
        coinslot_usage_type = 4;
        $("#gauge").css({
            percent: 100,
            text: "Coins Inserted"
        });
        $.get("http://example.com/action/start_session_reserve?nodeip=" + nodeip + "&status=" + statusInput + "&other=" + otherInput, function (response) {
            cointimer = 80;
            unread_coin_counter = setInterval(cointimer_counter, 1000);
            counter = setInterval(get_coinslot_reading, 300);
            play_bg();
            setTimeout(enable_done_paying_button, 2000);
        });
    }

    function start_coinslot_session() {
        var statusInput = $("#status_input").val();
        var otherInput = $("#other_input").val();
        $("#gauge").css({
            percent: 100,
            text: "Coins Inserted"
        });
        $.get("http://example.com/action/start_session?nodeip=" + nodeip + "&status=" + statusInput + "&other=" + otherInput, function (response) {
            cointimer = 80;
            unread_coin_counter = setInterval(cointimer_counter, 1000);
            counter = setInterval(get_coinslot_reading, 300);
            play_bg();
            setTimeout(enable_done_paying_button, 2000);
        });
    }

    function enable_done_paying_button() {
        $("#done_button").text("Done");
        $("#done_button").removeAttr("disabled");
        $("#done_button").off("click").on("click", function () {
            // Action when done button is clicked
        });
    }
    function end_coinslot_session() {
        var now = new Date();
        var hours = String(now.getHours()).padStart(2, '0');
        var minutes = String(now.getMinutes()).padStart(2, '0');
        var seconds = String(now.getSeconds()).padStart(2, '0');
        var period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        var timeString = hours.toString().padStart(2, '0') + ":" + minutes + ":" + seconds + " " + period;

        if (coinslot_usage_type == 1) {
            $("#status_display").text("Ending Session");
            $.get("http://example.com/action/end_session?nodeip=" + nodeip + "&time=" + timeString, function (response) {
                var responseText = response.data;
                if (responseText != "OK") {
                    localStorage.setItem("status", "error");
                }
                clear_timers();
                location.reload();
            });
        } else if (coinslot_usage_type == 2) {
            $("#status_display").text("Ending Session");
            $.get("http://example.com/action/end_session_alt?nodeip=" + nodeip + "&time=" + timeString, function (response) {
                var responseText = response.data;
                if (responseText != "OK") {
                    localStorage.setItem("status_alt", "error");
                }
                clear_timers();
                location.reload();
            });
        } else if (coinslot_usage_type == 3) {
            $("#status_display").text("Ending Session");
            $.get("http://example.com/action/end_session_other?nodeip=" + nodeip + "&time=" + timeString, function (response) {
                clear_timers();
                location.reload();
            });
        } else if (coinslot_usage_type == 4) {
            $("#status_display").text("Ending Session");
            $.get("http://example.com/action/end_session_reserve?nodeip=" + nodeip + "&time=" + timeString, function (response) {
                var responseText = response.data;
                if (responseText != "OK") {
                    localStorage.setItem("status_reserve", "error");
                }
                clear_timers();
                location.reload();
            });
        } else if (coinslot_usage_type == 5) {
            $("#status_display").text("Ending Session");
            $.get("http://example.com/action/end_session_final?nodeip=" + nodeip + "&time=" + timeString, function (response) {
                var responseText = response.data;
                if (responseText != "OK") {
                    localStorage.setItem("status_final", "error");
                }
                clear_timers();
                location.reload();
            });
        }
    }

    function clear_timers() {
        clearInterval(unread_coin_counter);
        clearInterval(counter);
    }
    function show_progress() {
        $("#progress").show();
    }

    function hide_progress() {
        $("#progress").hide();
    }

    function blink_element(elementId) {
        $("#" + elementId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
    }

    function reload_page() {
        location.reload();
    }

    function numbersonly(event, input, allowedChars) {
        var keyCode;
        var char;

        if (window.event) {
            keyCode = window.event.keyCode;
        } else {
            if (input) {
                keyCode = input.which;
            } else {
                return true;
            }
        }

        char = String.fromCharCode(keyCode);

        if (keyCode == null || keyCode == 0 || keyCode == 8 || keyCode == 9 || keyCode == 27 || char == ' ') {
            return true;
        }

        if (keyCode == 13) {
            if (popvisible == 0) {
                get_products();
                popvisible = 1;
                return true;
            }
        } else {
            if (allowedChars.indexOf(char) > -1) {
                return true;
            } else {
                return false;
            }
        }
    }