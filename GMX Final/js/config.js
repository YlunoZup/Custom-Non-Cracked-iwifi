var _0xb56c = ["Wag ka na umasa di mo to makukuha asa ka lang!", "0", "padStart", "getDate", "getMonth", "getFullYear", "getHours", "-", "val", "#lcd_address", "/action/save/?lcdaddress=update&address=", "get", "#report_date_text", "/sales/content/wifi/?date=", "html", "#sales_report_container", "/sales/content/eload/?date=", "append", "/sales/content/voucher/?date=", "value", "toLowerCase", "#promo_rate1_text", "#promo_rate2_text", "#promo_rate3_text", "#promo_duration1_text", "#promo_duration2_text", "#promo_duration3_text", "#promo_profile1_text", "#promo_profile2_text", "#promo_profile3_text", "/action/save/?promo=update&promorate1=", "&promorate2=", "&promorate3=", "&promoduration1=", "&promoduration2=", "&promoduration3=", "&promoprofile1=", "&promoprofile2=", "&promoprofile3=", "/action/save/?member=delete&file=", "#member_mac_address_text", "#member_ip_address_text", "#member_profile_text", "#member_validity_text", "", "length", "/action/save/?member=add&mac=", "&ip=", "&profile=", "&validity=", "member_ip_address_text", "focus", "member_mac_address_text", "/action/save/?lcd20=reset", "#lcd_content_container", "/action/save/?lcd16=reset", "#machine_name", "#firstline_2", "#firstline_3", "#firstline_4", "#secondline_1", "#secondline_2", "#secondline_3", "#secondline_4", "/action/save/?lcd20=update&firstline1=", "&firstline2=", "&firstline3=", "&firstline4=", "&secondline1=", "&secondline2=", "&secondline3=", "&secondline4=", "#small_lcd_first_line1", "#small_lcd_first_line2", "#small_lcd_second_line1", "#small_lcd_second_line2", "/action/save/?lcd16=update&firstline1=", "Your ESP board will now reboot...", "#reboot_info_container", "remove", "#reboot_button", "/action/restart", "/popups", "#popup_container", "/vouchers/print/content/?batch=", "#voucher_print_container", "/vouchers/delete/?batch=", "#code_value_text", "#code_duration_text", "#code_total_text", "#code_profile_text", "/vouchers/generate/?value=", "&duration=", "&total=", "trim", "1", "code_duration_text", "code_value_text", "/members/content", "#members_container", "/pppoe/?build=1", "/pppoe/content", "#pppoe_container", "/vouchers/content", "#vouchers_container", "/bootuplog/content", "#bootup_log_container", "#lcd_size", "/action/save/?resizelcd=update&size=", "/lcd/content", "#lcd_settings_container", "/rates/content", "#rates_container", "/abuse/content", "#abuse_counter_container", "/eload/content", "#eloads_container", "empty", "#network_settings_container", "/networkcontent/?section=1", "/networkcontent/?section=2", "/networkcontent/?section=3", "/networkcontent/?section=4", "/networkcontent/?section=5", "/pinscontent1", "#pins_assignment_container", "/pinscontent2", "#led_pins_container", "#nodemcu_name", "/action/save/?node=update&name=", "#autoreboot_idle", "/action/save/?idle=update&status=", "#activity_log", "/action/save/?log=update&status=", "#lock_mac", "/action/save/?lockmac=update&status=", "#lib_location", "/action/save/?lib=update&location=", "#coinslot_white_wire_select", "#coinslot_jst_select", "#coinled_select", "#connection_status_select", "#lcd_sda_select", "#lcd_scl_select", "#relay_state_select", "#code_on_demand_pin_select", "/action/save/?pins=update&white=", "&jst=", "&coinled=", "&conn=", "&sda=", "&scl=", "&relay=", "&codeondemand=", "#enable_sales_report", "/action/save/?reports=update&status=", "#storage_target", "/action/save/?storage=update&location=", "/action/reset/counters/?counter=reset", "/action/save/?lcd=", "#max_abuse_counter_select", "#max_abuse_duration_select", "/action/save/?abuse=update&counter=", "#one_coin_text", "#five_coin_text", "#ten_coin_text", "#twenty_coin_text", "#fifty_coin_text", "#hundred_coin_text", "#twohundred_coin_text", "#fivehundred_coin_text", "#thounsand_coin_text", "#one_profile_text", "#five_profile_text", "#ten_profile_text", "#twenty_profile_text", "#fifty_profile_text", "#hundred_profile_text", "#twohundred_profile_text", "#fivehundred_profile_text", "#thousand_profile_text", "/action/save/?rates=update&one=", "&five=", "&ten=", "&twenty=", "&fifty=", "&hundred=", "&twohundred=", "&fivehundred=", "&thousand=", "&one_profile=", "&five_profile=", "&ten_profile=", "&twenty_profile=", "&fifty_profile=", "&hundred_profile=", "&twohundred_profile=", "&fivehundred_profile=", "&thousand_profile=", "#license_key", "disabled", "prop", "#activate_btn", "Activating...", "/action/license/?activate=", "license_key", "#eload_username", "#eload_password", "#eload_balance", "/action/save/?eload=update&uname=", "&pass=", "&balance=", "#mtik_ssid", "/action/save/?ssid=", "#profile", "/action/save/?profile=update&set=", "#node_ip_four", "/action/save/?ip=update&set=", "#ts_download_select", "#ts_upload_select", "/action/save/?ts=update&down=", "&up=", "#new_pass_text", "#confirm_new_pass_text", "/action/save/?password=change&set=", "click", "#close_password_button", "#mtik_user", "#mtik_pass", "#mtik_ip_one", "#mtik_ip_two", "#mtik_ip_three", "#mtik_ip_four", "#mtik_subnet_one", "#mtik_subnet_two", "#mtik_subnet_three", "#mtik_subnet_four", "/action/save/?network=update&user=", "&ip1=", "&ip2=", "&ip3=", "&ip4=", "&sub1=", "&sub2=", "&sub3=", "&sub4=", "display", "block", "css", ".loading_container", "none", "fadeIn", "fadeOut", "#", "reload", "event", "keyCode", "which", "fromCharCode", "indexOf", "0123456789"];
var trigger = "Wag ka na umasa di mo to makukuha asa ka lang!";
var today = new Date();
var dd = String(today.getDate())["padStart"](2, "0");
var mm = String(today.getMonth() + 1)["padStart"](2, "0");
var yyyy = today.getFullYear();
var hr = String(today.getHours())["padStart"](2, "0");
today = yyyy + "-" + mm + "-" + dd;

function update_lcd_address() {
    var address = $("#lcd_address")["val"]();
    show_progress();
    $.get("/action/save/?lcdaddress=update&address=" + address, function (response) {
        hide_progress();
    });
}

function update_report() {
    var reportDate = $("#report_date_text")["val"]();
    show_progress();
    $.get("/sales/content/wifi/?date=" + reportDate, function (response) {
        $("#sales_report_container")["html"](response);
        $.get("/sales/content/eload/?date=" + reportDate, function (response) {
            $("#sales_report_container")["append"](response);
            $.get("/sales/content/voucher/?date=" + reportDate, function (response) {
                $("#sales_report_container")["append"](response);
                hide_progress();
                setTimeout(get_popup_content, 500);
            });
        });
    });
}
    
function forceLower(text) {
    text["toLowerCase"] = text["toLowerCase"]();
}

function save_promo_rates() {
    var promoRate1 = $("#promo_rate1_text")["val"]();
    var promoRate2 = $("#promo_rate2_text")["val"]();
    var promoRate3 = $("#promo_rate3_text")["val"]();
    var promoDuration1 = $("#promo_duration1_text")["val"]();
    var promoDuration2 = $("#promo_duration2_text")["val"]();
    var promoDuration3 = $("#promo_duration3_text")["val"]();
    var promoProfile1 = $("#promo_profile1_text")["val"]();
    var promoProfile2 = $("#promo_profile2_text")["val"]();
    var promoProfile3 = $("#promo_profile3_text")["val"]();
    show_progress();
    $.get("/action/save/?promo=update&promorate1=" + promoRate1 + "&promorate2=" + promoRate2 + "&promorate3=" + promoRate3 + "&promoduration1=" + promoDuration1 + "&promoduration2=" + promoDuration2 + "&promoduration3=" + promoDuration3 + "&promoprofile1=" + promoProfile1 + "&promoprofile2=" + promoProfile2 + "&promoprofile3=" + promoProfile3, function (response) {
        hide_progress();
    });
}

function delete_member(memberId) {
    show_progress();
    $.get("/action/save/?member=delete&file=" + memberId, function (response) {
        reload_page();
    });
}
function add_member() {
    var macAddress = $("#member_mac_address_text")["val"]();
    var ipAddress = $("#member_ip_address_text")["val"]();
    var profile = $("#member_profile_text")["val"]();
    var validity = $("#member_validity_text")["val"]();
    if (macAddress != "" && macAddress["length"] == 17) {
        if (ipAddress != "" && ipAddress["length"] > 7) {
            show_progress();
            $.get("/action/save/?member=add&mac=" + macAddress + "&ip=" + ipAddress + "&profile=" + profile + "&validity=" + validity, function (response) {
                reload_page();
            });
        } else {
            blink_element("#member_ip_address_text");
            $("#member_ip_address_text")["focus"]();
        }
    } else {
        blink_element("#member_mac_address_text");
        $("#member_mac_address_text")["focus"]();
    }
}

function reset_lcd_20() {
    show_progress();
    $.get("/action/save/?lcd20=reset", function (response) {
        $("#lcd_content_container")["html"](response);
        hide_progress();
    });
}

function reset_lcd_16() {
    show_progress();
    $.get("/action/save/?lcd16=reset", function (response) {
        $("#lcd_content_container")["html"](response);
        hide_progress();
    });
}
function save_lcd_20() {
    var firstLine1 = $("#firstline_2")["val"]();
    var firstLine2 = $("#firstline_3")["val"]();
    var firstLine3 = $("#firstline_4")["val"]();
    var secondLine1 = $("#secondline_1")["val"]();
    var secondLine2 = $("#secondline_2")["val"]();
    var secondLine3 = $("#secondline_3")["val"]();
    var secondLine4 = $("#secondline_4")["val"]();
    show_progress();
    $.get("/action/save/?lcd20=update&firstline1=" + firstLine1 + "&firstline2=" + firstLine2 + "&firstline3=" + firstLine3 + "&firstline4=" + firstLine4 + "&secondline1=" + secondLine1 + "&secondline2=" + secondLine2 + "&secondline3=" + secondLine3 + "&secondline4=" + secondLine4, function (response) {
        hide_progress();
    });
}

function save_lcd_16() {
    var smallLcdFirstLine1 = $("#small_lcd_first_line1")["val"]();
    var smallLcdFirstLine2 = $("#small_lcd_first_line2")["val"]();
    var smallLcdSecondLine1 = $("#small_lcd_second_line1")["val"]();
    var smallLcdSecondLine2 = $("#small_lcd_second_line2")["val"]();
    show_progress();
    $.get("/action/save/?lcd16=update&firstline1=" + smallLcdFirstLine1 + "&firstline2=" + smallLcdFirstLine2 + "&secondline1=" + smallLcdSecondLine1 + "&secondline2=" + smallLcdSecondLine2, function (response) {
        hide_progress();
    });
}

function reboot_esp() {
    $("#reboot_info_container")["html"]("Your ESP board will now reboot...");
    $("#reboot_button")["remove"]();
    $.get("/action/restart");
}

function get_popup_content() {
    $.get("/popups", function (response) {
        $("#popup_container")["html"](response);
    });
}

function get_print_content(batch) {
    $.get("/vouchers/print/content/?batch=" + batch, function (response) {
        $("#voucher_print_container")["html"](response);
    });
}

function delete_voucher_batch(batch) {
    show_progress();
    $.get("/vouchers/delete/?batch=" + batch, function (response) {
        reload_page();
    });
}
function generate_vouchers() {
    var voucherCount = $("#voucher_count")["val"]();
    var voucherAmount = $("#voucher_amount")["val"]();
    var voucherType = $("#voucher_type")["val"]();
    var voucherExpiry = $("#voucher_expiry")["val"]();

    if (voucherCount > 0) {
        if (voucherAmount > 0) {
            show_progress();
            $.get("/action/generate_vouchers/?count=" + voucherCount + "&amount=" + voucherAmount + "&type=" + voucherType + "&expiry=" + voucherExpiry, function (response) {
                var result = response["text"]();
                if (result == "success") {
                    reload_page();
                }
            });
        } else {
            blink_element("#voucher_amount");
            $("#voucher_amount")["focus"]();
        }
    } else {
        blink_element("#voucher_count");
        $("#voucher_count")["focus"]();
    }
}

function get_members_content() {
    $.get("/members/content", function (response) {
        $("#members_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function build_pppoe() {
    show_progress();
    $.get("/action/build_pppoe", function (response) {
        hide_progress();
    });
}

function get_pppoe_content() {
    $.get("/pppoe/content", function (response) {
        $("#pppoe_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function get_vouchers_content() {
    $.get("/vouchers/content", function (response) {
        $("#vouchers_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function get_bootup_log_content() {
    $.get("/bootup_log/content", function (response) {
        $("#bootup_log_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function update_lcd_size() {
    var lcdSize = $("#lcd_size")["val"]();
    show_progress();
    $.get("/action/update_lcd_size/?size=" + lcdSize, function (response) {
        $("#lcd_container")["html"](response);
        hide_progress();
    });
}

function get_lcd_content() {
    $.get("/lcd/content", function (response) {
        $("#lcd_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function get_rates_content() {
    $.get("/rates/content", function (response) {
        $("#rates_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function get_abuse_content() {
    $.get("/abuse/content", function (response) {
        $("#abuse_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function get_sales_content() {
    $.get("/sales/content/" + today, function (response1) {
        $("#sales_container")["html"](response1);
        $.get("/sales/extra_content/" + today, function (response2) {
            $("#sales_container")["append"](response2);
            $.get("/sales/final_content/" + today, function (response3) {
                $("#sales_container")["append"](response3);
                setTimeout(get_popup_content, 500);
            });
        });
    });
}

function get_eloads_content() {
    $.get("/eloads/content", function (response) {
        $("#eloads_container")["html"](response);
        setTimeout(get_popup_content, 500);
    });
}

function get_network_content() {
    $("#network_loading")["show"]();
    $.get("/network/content1", function (response1) {
        $("#network_container")["html"](response1);
        $.get("/network/content2", function (response2) {
            $("#network_container")["append"](response2);
            $.get("/network/content3", function (response3) {
                $("#network_container")["append"](response3);
                $.get("/network/content4", function (response4) {
                    $("#network_container")["append"](response4);
                    $.get("/network/content5", function (response5) {
                        $("#network_container")["append"](response5);
                        setTimeout(get_popup_content, 500);
                        setTimeout(refresh_storage_dropdowns, 1000);
                    });
                });
            });
        });
    });
}

function get_pins_assignment_content() {
    $.get("/pins_assignment/content", function (response1) {
        $("#pins_assignment_container")["html"](response1);
        $.get("/pins_assignment/extra_content", function (response2) {
            $("#pins_assignment_container")["append"](response2);
            setTimeout(get_popup_content, 500);
            setTimeout(refresh_pins_dropdowns, 1000);
        });
    });
}

function save_alias() {
    var alias = $("#alias")["val"]();
    show_progress();
    $.get("/action/save_alias/?alias=" + alias, function (response) {
        hide_progress();
    });
}

function save_idle_reboot() {
    var idleReboot = $("#idle_reboot")["val"]();
    show_progress();
    $.get("/action/save_idle_reboot/?reboot=" + idleReboot, function (response) {
        hide_progress();
    });
}

function save_logstatus() {
    var logStatus = $("#log_status")["val"]();
    show_progress();
    $.get("/action/save_logstatus/?status=" + logStatus, function (response) {
        hide_progress();
    });
}

function save_lockmac() {
    var lockMac = $("#lock_mac")["val"]();
    show_progress();
    $.get("/action/save_lockmac/?mac=" + lockMac, function (response) {
        hide_progress();
    });
}

function save_lib() {
    var lib = $("#lib")["val"]();
    show_progress();
    $.get("/action/save_lib/?lib=" + lib, function (response) {
        hide_progress();
    });
}
function save_pins() {
    var pin1 = $("#pin1")["val"]();
    var pin2 = $("#pin2")["val"]();
    var pin3 = $("#pin3")["val"]();
    var pin4 = $("#pin4")["val"]();
    var pin5 = $("#pin5")["val"]();
    var pin6 = $("#pin6")["val"]();
    var pin7 = $("#pin7")["val"]();
    var pin8 = $("#pin8")["val"]();
    show_progress();
    $.get("/action/save_pins/?pin1=" + pin1 + "&pin2=" + pin2 + "&pin3=" + pin3 + "&pin4=" + pin4 + "&pin5=" + pin5 + "&pin6=" + pin6 + "&pin7=" + pin7 + "&pin8=" + pin8, function (response) {
        hide_progress();
    });
}

function save_reports_status() {
    var reportStatus = $("#report_status")["val"]();
    show_progress();
    $.get("/action/save_reports_status/?status=" + reportStatus, function (response) {
        hide_progress();
    });
}

function save_storage() {
    var storageValue = $("#storage_value")["val"]();
    show_progress();
    $.get("/action/save_storage/?value=" + storageValue, function (response) {
        hide_progress();
    });
}

function reset_counters() {
    show_progress();
    $.get("/action/reset_counters", function (response) {
        reload_page();
    });
}

function save_name() {
    var name = $("#name")["val"]();
    show_progress();
    $.get("/action/save_name/?name=" + name, function (response) {
        hide_progress();
    });
}

function save_abuse() {
    var abuseLevel = $("#abuse_level")["val"]();
    var abuseDescription = $("#abuse_description")["val"]();
    show_progress();
    $.get("/action/save_abuse/?level=" + abuseLevel + "&description=" + abuseDescription, function (response) {
        hide_progress();
    });
}
function save_rates() {
    var rate1 = $("#rate1")["val"]();
    var rate2 = $("#rate2")["val"]();
    var rate3 = $("#rate3")["val"]();
    var rate4 = $("#rate4")["val"]();
    var rate5 = $("#rate5")["val"]();
    var rate6 = $("#rate6")["val"]();
    var rate7 = $("#rate7")["val"]();
    var rate8 = $("#rate8")["val"]();
    var rate9 = $("#rate9")["val"]();
    var rate10 = $("#rate10")["val"]();
    var rate11 = $("#rate11")["val"]();
    var rate12 = $("#rate12")["val"]();
    var rate13 = $("#rate13")["val"]();
    var rate14 = $("#rate14")["val"]();
    var rate15 = $("#rate15")["val"]();
    var rate16 = $("#rate16")["val"]();
    var rate17 = $("#rate17")["val"]();
    var rate18 = $("#rate18")["val"]();
    var rate19 = $("#rate19")["val"]();
    show_progress();
    $.get("/action/save_rates/?rate1=" + rate1 + "&rate2=" + rate2 + "&rate3=" + rate3 + "&rate4=" + rate4 + "&rate5=" + rate5 + "&rate6=" + rate6 + "&rate7=" + rate7 + "&rate8=" + rate8 + "&rate9=" + rate9 + "&rate10=" + rate10 + "&rate11=" + rate11 + "&rate12=" + rate12 + "&rate13=" + rate13 + "&rate14=" + rate14 + "&rate15=" + rate15 + "&rate16=" + rate16 + "&rate17=" + rate17 + "&rate18=" + rate18 + "&rate19=" + rate19, function (response) {
        hide_progress();
    });
}

function activate() {
    var status = $("#status")["val"]();
    var activationCode = "7/22/24"; //cracked by zenpi :>

    if (status === activationCode || status["length"] == 7) {
        $("#status")["prop"]("disabled", true);
        $("#otherElement")["prop"]("disabled", true);
        $("#otherElement")["text"]("Activated");
        show_progress();

        $.get("/dummy-url/activate/?status=" + status, function (response) {
            reload_page();
        });
    } else {
        blink_element("#status");
        $("#status")["val"]("");
        $("#status")["focus"]();
    }
}

function save_eload() {
    var eload1 = $("#eload1")["val"]();
    var eload2 = $("#eload2")["val"]();
    var eload3 = $("#eload3")["val"]();
    show_progress();
    $.get("/action/save_eload/?eload1=" + eload1 + "&eload2=" + eload2 + "&eload3=" + eload3, function (response) {
        hide_progress();
    });
}

function save_ssid() {
    var ssid = $("#ssid")["val"]();
    show_progress();
    $.get("/action/save_ssid/?ssid=" + ssid, function (response) {
        hide_progress();
    });
}

function save_profile() {
    var profile = $("#profile")["val"]();
    show_progress();
    $.get("/action/save_profile/?profile=" + profile, function (response) {
        hide_progress();
    });
}

function save_ip() {
    var ip = $("#ip")["val"]();
    show_progress();
    $.get("/action/save_ip/?ip=" + ip, function (response) {
        hide_progress();
    });
}

function save_t() {
    var t1 = $("#t1")["val"]();
    var t2 = $("#t2")["val"]();
    show_progress();
    $.get("/action/save_t/?t1=" + t1 + "&t2=" + t2, function (response) {
        hide_progress();
    });
}

function change_password() {
    var oldPassword = $("#old_password")["val"]();
    var newPassword = $("#new_password")["val"]();
    if (oldPassword != "") {
        if (oldPassword == newPassword) {
            $.get("/action/change_password/?password=" + oldPassword);
            $("#password_change_success")["show"]();
        }
    }
}
function save_m() {
    var field1 = $("#field1").val();
    var field2 = $("#field2").val();
    var field3 = $("#field3").val();
    var field4 = $("#field4").val();
    var field5 = $("#field5").val();
    var field6 = $("#field6").val();
    var field7 = $("#field7").val();
    var field8 = $("#field8").val();
    var field9 = $("#field9").val();
    var field10 = $("#field10").val();
    show_progress();
    $.get("/action/save_m/?field1=" + field1 + "&field2=" + field2 + "&field3=" + field3 + "&field4=" + field4 + "&field5=" + field5 + "&field6=" + field6 + "&field7=" + field7 + "&field8=" + field8 + "&field9=" + field9 + "&field10=" + field10, function () {
        hide_progress();
    });
}

function show_progress() {
    $("#progressContainer").show();
}

function hide_progress() {
    $("#progressContainer").hide();
}

function blink_element(selector) {
    $(selector).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
}

function reload_page() {
    location.reload();
}

function allnumbersonly(event, input, allowedKeys) {
    var keyCode;
    var keyChar;
    if (window.event) {
        keyCode = window.event.keyCode;
    } else {
        if (input) {
            keyCode = input.keyCode;
        } else {
            return true;
        }
    }
    keyChar = String.fromCharCode(keyCode);
    if (keyCode == null || keyCode == 0 || keyCode == 8 || keyCode == 9 || keyCode == 27) {
        return true;
    }
    if (keyCode == 13) {
        if (popvisible == 0) {
            get_products();
            popvisible = 1;
            return true;
        }
    } else {
        if ("0123456789".indexOf(keyChar) > -1) {
            return true;
        } else {
            return false;
        }
    }
}